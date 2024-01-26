import CostItem from "./components/CostItem";


function App() {
      // создаем обьект даты
      // const costDate = new Date(2024, 2, 15)

      // const costDescription = 'Холодильничек'
      // const costAmount = 777.55

      const costs = [
        {
          date: new Date(2024, 2, 15),
          description : 'Холодильничек',
          amount : 500,
        },
        {
          date: new Date(2024, 5, 1),
          description : 'Телевизор',
          amount : 400,
        },
        {
          date: new Date(2024, 7, 18),
          description : 'Джинсы',
          amount : 300,
        },

      ]
  return (
    <div>
      <h1>Начнем изучение React</h1>
      <p>Всем привет!</p>
      <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount} />
      <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount} />
      <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount} />
    </div>
  );
}

export default App;
