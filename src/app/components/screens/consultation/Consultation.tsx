
import './style.css'

function Consultation({ title, text }: { title: string, text?: string }) {
    return (
        <div className='container'>
            <div className="formBody p-7 flex items-center justify-between">
                <div className='w-[384px] text-[#FFFFFF] pl-5'>
                    <h2 className={`${text ? "text-[17px]" : "text-[36px]"} font-bold`}>{title}</h2>
                    <p className={`text-[13px] ${text && "mt-2"} font-[300]`}>{text}</p>
                </div>
                <form className='flex items-center gap-5'>
                    <div className="relative z-0 w-full group">
                        <input type="text" name="floating_password1" id="floating_password1" className="h-[64px] font-bold block py-2.5 px-[20px] w-[272px]  text-[15px] text-gray-900 bg-[#FFFFFF] rounded-[12px] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password1" className="peer-focus:font-medium absolute  px-[20px] text-[13px] text-[#9A9DA3] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Как вас зовут?</label>
                    </div>
                    <div className="relative z-0 w-full group">
                        <input type="text" name="floating_password2" id="floating_password2" className="block py-2.5 px-[20px] w-[272px]  text-[15px] text-gray-900 rounded-[12px] bg-[#FFFFFF] border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 font-bold focus:outline-none h-[64px] focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="floating_password2" className="peer-focus:font-medium absolute text-[13px]  px-[20px] text-[#9A9DA3] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-5 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ваш номер телефона</label>
                    </div>
                    <button type="submit" className="text-white bg-[#073535] focus:ring-4 px-[72px] h-[64px] focus:outline-none rounded-lg text-[15px] font-bold sm:w-auto text-center">Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default Consultation