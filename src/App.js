import './App.css';
import NewForm from './component/NewForm';
import BucketList from './component/BucketList';
import EditForm from './component/EditForm'
import Details from './component/Details'

function App() {
  return (
    <div className="App">
      <h1>Bucket List App</h1>

      <Router>
        <Switch>
          <Route exact path="/blist/new" render={(routerProps) => <NewForm {...routerProps} />} />
          <Route exact path="/blist" render={() => <BucketList />} />
          <Route exact path="/blist/:id/edit" render={(routerProps) => <EditForm {...routerProps} />} />
          <Route exact path="/blist/:id" render={(routerProps) => <Details {...routerProps} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;

/*
remote = github
pull from remote main into local main after merge on remote
checkout feature branch, merge local main code into feature branch


*/
