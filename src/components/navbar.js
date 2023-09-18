export default function Navbar() {
    return(
        <nav className="fixed top-0 flex w-full flex-wrap items-center  justify-between bg-[#FFFFFF] py-4 text-neutral-500 shadow-md hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-6">
            <div className="flex w-full max-w-screen-md m-auto flex-wrap items-center justify-between px-3">
                <a href="/" className="logo">Entregador-express</a>
                <a href="/auth/signin">Entrar</a>
            </div>
        </nav>
    )
}