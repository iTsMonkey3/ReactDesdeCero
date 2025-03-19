import './App.css'

export function App () {
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                alt="Avatar de usuario" 
                src="https://unavatar.io/google/netflix.com" />
                <div>
                    <strong>Nombre de usuario</strong>
                    <span className='tw-followCard-info'>@deUsuario</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>

        </article>
    )
}