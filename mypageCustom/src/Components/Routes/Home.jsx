import Card from '../Tasks/Card'
function Home() {
    return ( 
        <>
            <div className="shadow-md p-5 m-5 border">
                <h3>Soy el Home</h3>
                <p className="shadow-sm p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit enim architecto eos.</p>
                {/* code */}
                <div className='flex justify-center flex-wrap'>
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

                <h1 className='text-black text-center'>Aca termina la Pagin@!</h1>
            </div>
        </>
     );
}

export default Home;