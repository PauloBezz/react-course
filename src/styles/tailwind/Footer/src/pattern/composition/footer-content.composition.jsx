import logo from "../../assets/wing.png"

export default function Content() {
    return (
        <div className="flex flex-col w-full items-center justify-center mt-20">
            <div className="w-16 pb-8">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex flex-wrap gap-x-4">
                <button className="px-2">Link One</button>
                <button className="px-2">Link Two</button>
                <button className="px-2">Link Three</button>
                <button className="px-2">Link Four</button>
                <button className="px-2">Link Five</button>
            </div>
        </div>
    )
}