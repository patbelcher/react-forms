export default function FormSubmit() {
const handleForm = (e) => {
    e.preventDefault()//stops the form from refreshing the page
    const make = e.target.make.value
    const model = e.target.model.value
    const year = e.target.year.value
    if(!year || !make || !model) return
    alert(`You submitted a ${make} ${model} ${year}`)
    e.target.make.value = '' //clear the form
    e.target.model.value = ''//clear the form
    e.target.year.value = ''//clear the form
}

    return (
        <>
            <h2>Get values on form submit.</h2>
            <p>Most of the time, we only need the form values 
                once the form is submitted.
            </p>
            <form onSubmit={handleForm}>
                <label htmlFor="make">Make:
                <input type="text" name="make" />
                </label>
                
                <label htmlFor="model">Model:
                <input type="text" name="model" />
                </label>
                
                <label htmlFor="year">Year:
                <input type="text" name="year" />
                </label>
                
                <input type="submit" value="Save vehicle"/>

            </form>
        </>
    )
}