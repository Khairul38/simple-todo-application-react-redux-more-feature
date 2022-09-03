import { Provider } from "react-redux";
import CompletedTodoList from "./components/CompletedTodoList";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="bg-blue-100 font-sans h-screen">
          {/* <!-- navbar --> */}
          <Navbar />

          <div className="grid gap-8 place-items-center mt-5">
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
              {/* <!-- header --> */}
              <Header />
              <hr className="mt-4" />

              {/* <!-- todo list --> */}
              <TodoList />

              <hr className="mt-4" />

              {/* <!-- footer --> */}
              <Footer />
            </div>
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
              <h1>Completed Todo List</h1>

              {/* <!-- todo list --> */}
              <CompletedTodoList />

              <hr className="mt-4" />

              {/* <!-- footer --> */}
              <Footer2 />
            </div>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
