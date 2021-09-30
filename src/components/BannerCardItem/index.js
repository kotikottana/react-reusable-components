import './index.css'

const BannerCardItem = props => {
  const {bannerCardData} = props
  const {id, headerText, description, className} = bannerCardData

  return (
    <li className="banner-card-container">
      <div>
        {className}
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
