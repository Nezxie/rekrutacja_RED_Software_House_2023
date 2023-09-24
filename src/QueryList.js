import Query from './Query'

export default function QueryList({queryList, nameCount}) {
  return (
    queryList.slice().reverse()  
    .map(query => {
      return <Query key={query.id} location={query.location} date={query.date} temperature={query.temperature} numberOfSearches={nameCount[query.location]}/>
    })
  )
}