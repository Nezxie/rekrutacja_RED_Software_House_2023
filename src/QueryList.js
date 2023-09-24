import Query from './Query'

export default function QueryList({queryList, queryCount}) {
  return (
    queryList.slice().reverse()  
    .map(query => {
      return <Query key={query.id} location={query.location} date={query.date} temperature={query.temperature} numberOfSearches={queryCount[query.location]}/>
    })
  )
}