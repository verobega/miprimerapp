import React, {Component} from 'react'

let logo = "https://www.mozilla.org/media/img/home/dino.5b20e2d050b2.svg"

class NavBar extends Component{

    state={
        name: 'Vero',
        email:'',
        tel:'',
        edad:''
    }

    cuandoCambie = e =>{
        let value = e.target.value
        //virtual dom:
        this.setState({search:value})
    }

    render(){
        return(
            <nav className="" >
                <img src={logo}/>
                <h2>
                    {this.state.search}
                    {/* nombre, correo, tel, edad*/}
                </h2>
                <input onChange={this.cuandoCambie} type="text" placeholder="Que andas buscando" />
                <button>Inicia sesión</button>
            </nav>

        )
    }
}

export default NavBar