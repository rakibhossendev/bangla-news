export default function Footer() {
    return (
        <footer className="mt-10">

            <div className="bg-[#FFFFFF] py-6">
                <div className="container mx-auto flex items-center justify-between">
                    <p className="text-gray-500">© {new Date().getFullYear()} BanglaBulletin</p>
                    <p className="text-right text-gray-500">Source: BBC Bangla</p>
                </div>
            </div>

        </footer>
    )
}