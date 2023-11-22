import Card from "../Card"

function Home() {
  return (
    <div>
        <div className="p-5 m-3 shadow-lg">
            <h2 className="p-3">Soy el Home</h2>
            <p className="shadow-md rounded-lg p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, mollitia! Quidem, impedit!</p>
            <div className="grid sm:grid-cols-4 grid-cols-2 place-content-center">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
        

    </div>
  )
}

export default Home
