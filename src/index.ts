import { timeStamp } from 'console';
import fs from 'fs'

export const solve = async (filepath: string) => {
  const fileData = fs.readFileSync(filepath, 'utf-8')
  const lines = fileData.split('\n').filter(line => !!line)
  if (lines.length === 0) {
    return {}
  }
  const extractedData = lines.map(dataExtraction)
  const filteredData = filterData(extractedData)
  return dataFormatting(filteredData)
};

enum OrderState {
  created,
  in_progress,
  completed
}

type EventData = {
  timestamp: number
  order_id: number
  state: OrderState | string
}

type OrderObject = {
  state: OrderState | string
  ts: number
}

type DatabaseObject = Record<string, OrderObject>

const dataExtraction = (line: string): EventData => {
  const data = line.split(' ')
  return {timestamp: Number(data[0]), order_id: Number(data[1]), state: data[2]}
}

const filterData = (lines: EventData[]): EventData[] => {
  let timestamp = 0
  const filteredData: EventData[] = lines.reduce((accumulator: EventData[], line)  => {
    if (!Object.values(OrderState).includes(line.state) || (line.timestamp <= timestamp) ) {
      return accumulator
    }
    const row = accumulator.filter(row => row.order_id === line.order_id).pop()
    if (row) {
      if (!(Number(OrderState[line.state as number]) - Number(OrderState[row.state as number]) === 1)) {
        return accumulator
      }
    }
    else {
      if (Number(OrderState[line.state as number]) !== OrderState.created) {
        return accumulator
      }
    }
    timestamp = line.timestamp
    accumulator.push(line)
    return accumulator
  }, [])
  return filteredData
}

const dataFormatting = (lines: EventData[]): DatabaseObject => {
  const databaseRecords: DatabaseObject = {}
  lines.map( line => {
    databaseRecords[line.order_id] = {state: line.state, ts: line.timestamp}
  })
  return databaseRecords
}
