import ceo from '../../assets/savvy assets/AboutUsPage/ceo.png'
import alicia from '../../assets/savvy assets/AboutUsPage/alicia.png'
import bella from '../../assets/savvy assets/AboutUsPage/bella.png'
import ellen from '../../assets/savvy assets/AboutUsPage/ellen.png'

const CardProps = ({imageSrc, name, position}) => {
    return (
        <div className='p-3 w-full'>
            <div className='bg-[#F3F3F3] p-5 rounded-[25px] flex flex-col h-full items-center justify-center'>

                <img src={imageSrc} alt="" />
                <div className='text-center py-1 font-medium'>
                <p>{position}</p>
                <p>{name}</p>
            </div>
        </div>
        
    </div>
    )
}

export const OurTeam = () => {
  return (
    <div>
        <p className='text-center py-10 text-primary-color font-semibold text-3xl'>Our Team</p>
        <CardProps imageSrc={ceo} position="CEO" name="Aluko Samuel" />
        <CardProps imageSrc={alicia} position="CEO" name="Aluko Samuel" />
        <CardProps imageSrc={bella} position="CEO" name="Aluko Samuel" />
        <CardProps imageSrc={ellen} position="CEO" name="Aluko Samuel" />

    </div>
  )
}
