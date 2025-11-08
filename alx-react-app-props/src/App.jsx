
import ProfilePage from './ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return <UserContext.Provider value={UserData}>
          <ProfilePage />;
         </UserContext.Provider>
  
}

export default App;