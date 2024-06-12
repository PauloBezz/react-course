import { Footer } from "./composition/index"

export default function FooterComposition() {
    return (
        <div className="flex flex-col h-fit gap-y-16 bg-[aliceblue]">
            <Footer.Content />
            <Footer.Credits />
        </div>
    )
}