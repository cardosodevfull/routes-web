export default function CreateRoute() {
    return (
        <div className="block mt-5 max-w-lg">
            <input
                type="text" id="location"
                className="bg-[#FBFBFB] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Endereço da coleta" required />
            <input
                type="text" id="location"
                className="bg-[#FBFBFB] border mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:shadow-outline"
                placeholder="Endereço da entrega" required />
            <div className="mt-2 flex justify-end">
                <button className="bg-transparent hover:bg-green-700 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-green-700 opacity-50 cursor-not-allowed">
                    Button
                </button>
                <button className="bg-green-700 hover:bg-green-900 ml-2 text-white font-bold py-2 px-4 border border-green-700 opacity-50 cursor-not-allowed">
                    Button
                </button>
            </div>

            <div className="flex w-full flex-wrap items-center mt-5">
                <div className="flex-1 text-center p-5 text-2xl">
                    <p>Total R$ 08,00</p>
                </div>
                <div className="flex-1 card-peyment text-center text-2xl">
                    <p>Dinheiro/Pix </p>
                </div>
            </div>
        </div>
    )
}