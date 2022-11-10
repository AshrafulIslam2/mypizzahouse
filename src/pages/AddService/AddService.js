import { error } from "daisyui/src/colors";
import { ToastContainer, toast } from "react-toastify";
import UseSetTile from "../../Hooks/UseSetTitle";

const AddService = () => {
  UseSetTile("Add Service");
  const addservice = (event) => {
    event.preventDefault();
    const form = event.target;
    const pizza = form.name.value;
    const price = form.price.value;
    const size = form.size.value;
    const slice = form.slice.value;
    const img = form.img.value;
    const description = form.description.value;
    const service = {
      title: pizza,
      img: img,
      price: price,
      description: description,
      Size: size,
      Spicy: "Mild",
      Slice: slice,
    };
    fetch("http://localhost:4000/api/services", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        toast("Service Added");
      })
      .catch((error = console.error(error)));
  };
  return (
    <section className="p-6 text-gray-100">
      <ToastContainer />
      <form
        onSubmit={addservice}
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-900 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold leading-tight">ADD SERVICE</h2>
        <div>
          <label for="name" className="block mb-1 ml-1">
            Pizaa Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            name="name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="img" className="block mb-1 ml-1">
            Image Url
          </label>
          <input
            id="img"
            type="text"
            placeholder="Give your pizza's image"
            required=""
            name="img"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="price" className="block mb-1 ml-1">
            Pice
          </label>
          <input
            id="price"
            type="text"
            placeholder="Pizza price"
            required=""
            name="price"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="size" className="block mb-1 ml-1">
            Pizza Size
          </label>
          <input
            id="size"
            type="text"
            placeholder="Give your piiza's size"
            name="size"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="slice" className="block mb-1 ml-1">
            Slice
          </label>
          <input
            id="slice"
            type="text"
            placeholder="Give your pizza's Slice"
            required=""
            name="slice"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="description" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="description"
            type="text"
            name="description"
            placeholder="description..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-blue-400 bg-gray-800"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-blue-400 focus:ring-blue-400 hover:ring-blue-400 text-gray-900"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddService;
