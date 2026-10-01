function Navbar() {
    return (

        <nav>
            <div>
                <h2>MovieFlix</h2>

                <div>
                    <input type="text" placeholder="Search Movies..." />
                    <button>Search</button>
                </div>
                <a href="/favorites">Favorites</a>
            </div>
        </nav>
    )
}

export default Navbar;
  
   