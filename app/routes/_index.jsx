import { useLoaderData, Link, useParams } from "react-router";


export async function loader() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')



  return response.json()
}

export default function Home() {
  const data = useLoaderData().slice(0, 10);
  // #const numbers = Math.floor(Math.random()*100)
 console.log(data);
 





  return (

    <div>
      <div className="container">
        <h2>Género</h2>
        <div className="bookstand">
          <div className="overflow-auto h-25">
            <div className="d-flex flex-nowrap gap-4 pb-3 ">
              {data.map((item, index) => (
                <div className="flex-shrink-1" key={index}>
                  <img src={`https://picsum.photos/200/300?random=1`} className="img-fluid img-thumbnail" alt="Book" />
                  <h5>{item.title}</h5>
                  <p className="text-wrap">{item.title}</p>
                  <button type="button" className="btn btn-secondary">Más información</button> #Onclick detalles libro
                </div>
              ))}
              <button type="button" className="btn btn-secondary">Más libros de #este género </button> #Onclick más libros del género

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}