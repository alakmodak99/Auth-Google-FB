
import {signInWithGoogle,signInWithFacebook} from "./config/firebase"
function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>Google</button>
      <button onClick={signInWithFacebook}>Facebook</button>
    </div>
  );
}

export default App;
