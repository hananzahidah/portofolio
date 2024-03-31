function Load() {
    window.addEventListener('load', function () {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
    });

    return(
        <div id="loader" className="fixed inset-0 flex items-center justify-center bg-load z-50">
            <img src="https://i.gifer.com/ZKZg.gif" alt="" className="w-20"/>
        </div>
    )
}

export default Load;