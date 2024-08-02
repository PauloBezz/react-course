export default function Credits() {
    return (
        <section className="flex flex-wrap h-14 mb-20 mx-8 sm:mx-2 items-end border-t-2 border-black justify-around">
            <article>
                <p>© 2023 Relume. All rights reserved.</p>
            </article>

            <div className="flex flex-wrap gap-x-6 underline">
                <a target="_blank" href="https://www.google.com/intl/pt-BR/policies/privacy/archive/20160325/" rel="noreferrer" >Privacy Policy</a>
                <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noreferrer">Terms of Service</a>
                <a href="https://developers.google.com/tag-platform/security/guides/customize-cookies?hl=pt-br" target="_blank" rel="noreferrer">Cookies Settings</a>
            </div>
        </section>
    )
}