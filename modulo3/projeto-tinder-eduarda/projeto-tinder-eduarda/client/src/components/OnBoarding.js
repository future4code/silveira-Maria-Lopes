import { useState } from 'react'
import Nav from './Nav';


const Onboarding = () => {
    const [ formData, setFormaData ] = useState({
        user_id: '',
        first_name: '',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        show_gender: false,
        gender_identity: 'man', 
        gender_interest: 'woman',
        email: '',
        url: '',
        about: '',
        matches: []
    })

    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        
        setFormaData((prevState) => ({
            ...prevState,
            [name] : value
        }))

    }


    return (
        <>

            <Nav
                minimal={true}
                setShowModal={() => { }}
                ShowModal={false}
            />

            <div className='onboarding'>
                <h2>CREATE ACCOUNT</h2>


                <form onSubmit={handleSubmit}>

                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type="text"
                            name="first_name"
                            placeholder='First Name'
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label>Birthday</label>
                        <div className='multiple-input-container'>
                            <input
                                id="dob_day"
                                type="number"
                                name="dob_day"
                                placeholder='DD'
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange}
                            />

                            <input
                                id="dob_month"
                                type="number"
                                name="dob_month"
                                placeholder='MM'
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange}
                            />


                            <input
                                id="dob_year"
                                type="number"
                                name="dob_year"
                                placeholder='YYYY'
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange}
                            />
                        </div>


                        <label>Gender</label>
                        <div className='multiple-input-container'>
                            <input
                                id="man-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'man'}
                            />
                            <label htmlFor="man-gender-identity">Man</label>

                            <input
                                id="woman-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'woman'}
                            />
                            <label htmlFor="woman-gender-identity">Woman</label>

                            <input
                                id="more-gender-identity"
                                type="radio"
                                name="gender_identity"
                                value="more"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'more'}
                            />
                            <label htmlFor="more-gender-identity">Everyone</label>

                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input
                            id="show-gender"
                            type="checkbox"
                            name="show-gender"
                            onChange={handleChange}
                            checked={formData.show_gender}
                        />

                        <label>Show Me</label>
                        <div className='multiple-input-container'>

                            <input
                                id="man-gender-interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value="man"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'man'}
                            />
                            <label htmlFor="man-gender-interest">Man</label>

                            <input
                                id="woman-gender-interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'woman'}
                            />
                            <label htmlFor="woman-gender-interest">Woman</label>

                            <input
                                id="everyone-gender-interest"
                                type="radio"
                                name="gender_interest"
                                required={true}
                                value="everyone"
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'}
                            />
                            <label htmlFor="more-gender-interest">Everyone</label>
                        </div>

                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks..."
                            value={formData.about}
                            onChange={handleChange}

                        />
                        <input type="submit" />
                    </section>


                    <section>
                        <label htmlFor="about">Profile Profile</label>
                        <input 
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className='photo-container'>
                            <img src={formData.url} alt="profile pic preview"/>
                        </div>

                    </section>

                </form>
            </div>

        </>
    )
}

export default Onboarding;