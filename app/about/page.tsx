export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-14">
           <h2 className="text-2xl md:text-3xl font-bold text-black text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <h2 className="text-2xl font-bold mt-4">Shubham</h2>
                    <p className="text-gray-600 mt-2">CEO</p>
                    <p className="text-gray-600 mt-2">shubham@liumgo.com</p>
                    <p className="text-gray-600 mt-2">+91 1234567890</p>
                </div>
                <div className="flex flex-col items-center"> 
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <h2 className="text-2xl font-bold mt-4">Akash</h2>
                    <p className="text-gray-600 mt-2">Director</p>
                    <p className="text-gray-600 mt-2">Akash@liumgo.com</p>
                    <p className="text-gray-600 mt-2">+91 1234567890</p>
                </div>
                <div className="flex flex-col items-center"> 
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    <h2 className="text-2xl font-bold mt-4">Akash</h2>
                    <p className="text-gray-600 mt-2">Latesh</p>
                    <p className="text-gray-600 mt-2">Latesh@liumgo.com</p>
                    <p className="text-gray-600 mt-2">+91 1234567890</p>
                </div>
            </div>
            <p className="text-gray-600 mt-2">We are a team of logistics professionals dedicated to providing top-notch logistics and transport solutions to our clients. Our team is passionate about delivering exceptional service and helping our clients achieve their goals.</p>

        </div>
    )
}