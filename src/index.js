

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Kasa/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);