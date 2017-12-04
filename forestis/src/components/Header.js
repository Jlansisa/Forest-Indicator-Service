import React, { Component } from 'react'

class Header extends Component {
    render () {
        return (
            <header>
                <div className="metsämittari">
                    Metsämittari
                </div>

                <div className="scenarios">
                            <a>Skenaariot</a>
                    </div>

                <div className="indicators">
                            <a>Indikaattorit</a>
                    </div>
            </header>
        )
    }
}

export default Header