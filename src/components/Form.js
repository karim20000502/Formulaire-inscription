import {useState} from 'react'
function Form (){
    const [nom, setNom]=useState("")
    const [password, setPassword]=useState("")
    const [dateNaissance, setDateNaissance]=useState("")
    const [ville, setVille]=useState("")
    const [genre, setGenre]=useState("")
    const [loisirs, setLoisirs]=useState([])
    function handleLoisirs(e){
        if(!loisirs.includes(e.target.value)){
            setLoisirs([...loisirs, e.target.value])
        }else{
            setLoisirs([...loisirs.filter((item)=>item!==e.target.value)])
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(`je suis ${nom} né le ${dateNaissance} a ${ville}et mes loisirs sont${loisirs.join(',')}`)
    }
    return(
        <div className='container'>
            <h1 className='alert alert-info d-flex  justify-content-center'>Formulaire d'inscription</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-group">
                    <label className='form-label'><strong>Nom :</strong></label>
                    <input className='form-control' type="text" name="name" onChange={(e)=>setNom(e.target.value)} placeholder="Enter Nom"/>
                </div>
                <div className="form-group">
                    <label><strong>Password :</strong></label>
                    <input className='form-control' type="password" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                    <label><strong>Date de naissance :</strong></label>
                    <input type="date" className='form-control' name="dateNaissance" onChange={(e)=>setDateNaissance(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label><strong>ville</strong></label>
                    <select name="ville" className='form-control' onChange={(e)=>setVille(e.target.value)}>
                        <option>Choisir une ville</option>
                        <option value="Rahme">Rahma</option>
                        <option value="Zagora">Zagora</option>
                        <option value="Casablanca">Casablanca</option>
                    </select>
                </div><br></br>
                <div className='form-group'>
                    <label className='form-check-label'><strong>Genre /</strong></label><br/>
                    <input type="radio" className='form-check-input' name="genre" value="Home" onChange={(e)=>setGenre(e.target.value)}/>Home<br/>
                    <input type="radio" className='form-check-input' name="genre" value="Femme" onChange={(e)=>setGenre(e.target.value)} />Femme
                </div><br></br>
                <div>
                    <label className='form-check-lable'><strong>Loisirs</strong></label><br></br>
                    <input type="checkbox" className='form-check-input' name="loisirs" value="Sport" onChange={(e)=>handleLoisirs(e)}/>Sport<br/>
                    <input type="checkbox" className='form-check-input' name="loisirs" value="Locture" onChange={(e)=>handleLoisirs(e)}/>Locture<br/>
                    <input type="checkbox" className='form-check-input' name="loisirs" value="Musique" onChange={(e)=>handleLoisirs(e)}/>Musique
                </div>
                <br/>
                <div>
                    <input type="submit" className='btn btn-success form-control' value="S'inscrire"/>
                </div>
            </form>
        </div>
    )
}
export default Form