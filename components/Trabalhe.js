import { useState } from 'react';
import './Trabalhe.scss';

function Trabalhe(){

        const[formValues, setformValues] = useState({ });
        
        const handleInputChange = (e) => {
            const {name, value} = e.target;
            setformValues({...formValues, [name]: value});
        };

        const handleSubmit = (e) =>{
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData);

            console.log('handleSubmit', data);
        };

        console.log('formValues', formValues);
        return(
            <div className="form-container">
                <h1 className="title">Trabalhe Conosco</h1>
                
                <form onSubmit={handleSubmit} className="formulario">
                   <div className ="container">
                        <div className="input-group">
                            
                            <label className="title-input">
                            Nome:
                            <input type="text" name="nome" required placeholder="nome" onChange={handleInputChange} value={formValues.name} />
                            </label>

                            <label className="title-input" >
                           Nascimento:
                            <input name="data" type="date" className="nascimento" onChange={handleInputChange} value={formValues.data || ''}/>
                            </label>  
                            
                            <label className="title-input">
                            Sobrenome: 
                            <input type="text" name="sobrenome" required placeholder="sobrenome" onChange={handleInputChange} value={formValues.sobrenome || ''} />
                            </label>                

                            <label className="title-input">
                                Sexo:
                                <select name="sexo" className="select-sexo" onChange={handleInputChange} value={formValues.sexo }>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Masculino" >Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                    <option value="Outros">Outros</option>
                                </select>
                            </label>
                            
                            <label className="title-input">
                            E-mail:
                                <input type="email" name="email" required placeholder="e-mail" onChange={handleInputChange} value={formValues.email} />
                            </label>
                    
                            <label className="title-input">
                                Estado:
                                <select name="estado" className="select-estado" onChange={handleInputChange} value={formValues.estado }>
                                    <option value="Selecione">Selecione</option>
                                    <option value="Masculino" >RJ</option>
                                    <option value="Feminino">SP</option>
                                    <option value="Outros">SC</option>
                                    <option value="Outros">PR</option>
                                    <option value="Outros">RS</option>
                                </select>
                            </label>

                            <label className="title-input">
                            Cargo:
                            <div className="chk-input">
                                <input className="chk" type="checkbox" name="gerente" /> Gerente
                                <input className="chk" type="checkbox" name="atendente"/> Atendente
                                <input className="chk" type="checkbox" name="auxiliar" /> Aux.Loja
                                <input className="chk" type="checkbox" name="estoque" /> Estoque
                            </div>
                        </label> 

                        </div> 
                    
                        <button type="submit" className="btn-enviar"><span>Enviar</span></button>
              
                   </div>
                </form>
            </div>
        )
    }

export default Trabalhe;