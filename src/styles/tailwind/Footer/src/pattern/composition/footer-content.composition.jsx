import logo from "../../assets/wing.png"

export default function Content() {
    return (
        <section className="flex flex-col w-full items-center justify-center mt-20">
            <a className="w-16 pb-8" href="/">
                <img src={logo} alt="logo" />
            </a>
            <article className="flex flex-wrap gap-x-4 mx-1 justify-center">
                <button className="px-2 hover:bg-black hover:px-2 hover:rounded border-black hover:text-white">Link One</button>
                <button className="px-2 hover:bg-black hover:px-2 hover:rounded border-black hover:text-white">Link Two</button>
                <button className="px-2 hover:bg-black hover:px-2 hover:rounded border-black hover:text-white">Link Three</button>
                <button className="px-2 hover:bg-black hover:px-2 hover:rounded border-black hover:text-white">Link Four</button>
                <button className="px-2 hover:bg-black hover:px-2 hover:rounded border-black hover:text-white">Link Five</button>
            </article>
        </section>
    )
}