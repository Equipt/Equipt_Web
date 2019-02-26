import React from 'react';
import theme from './../theme.js';
import Radium from 'radium';
import PropTypes from 'prop-types';
import CheckBox from './icons/CheckBox';

const TermsContent = () => (
  <div style={ styles.container }>
    <h4>End User License Agreement</h4>
    <ol style={ styles.list }>
      <p>These Terms of Service ("Terms") constitute a legally binding agreement ("Agreement") between you and Equipt (as defined below) governing your access to and use of the Equipt’s website, including any subdomains thereof, and any other websites through which Equipt makes its services available (collectively, "Site"), our mobile, tablet and other smart device applications, and application program interfaces (collectively, "Application") and all associated services (collectively, "Equipt Services"). The Site, Application and Equipt Services together are hereinafter collectively referred to as the “Equipt Platform”. Equipt reserves the right to modify these Terms at any time.</p>
      <h5>1. Scope of Equipt’s Services</h5>
      <p>1.1 The Equipts Platform is an online marketplace that allows registered users to publish Sporting Goods (Users that offer rentals of sporting goods are known as “Owners”) for rental on Equipt’s sporting good listings and to communicate and transact directly with users (An agreement made by a Owner and User for use of a particular sporting good is known as a “Rental”) seeking to rent these sporting goods (Users that are renting goods from Owners are known as “Renters”). </p>
      <p>1.2 As the provider of the Equipt Platform, Equipt does not own, create, sell, resell, provide, control, manage, offer, deliver, or supply any Listings or Sporting Goods. Owners alone are responsible for their listing and Sporting Goods. When Users make or accept a rental, they are entering into a contract directly with each other. Equipt is not and does not become a party to or other participant in any contractual relationship between Users.</p>
      <p>1.3 While we may help facilitate the resolution of disputes, Equipt has no control over and does not guarantee (i) the existence, quality, safety, suitability, or legality of any Listings or Sporting Goods, the truth or accuracy of any Listing descriptions, Ratings, Reviews, or other User Content. Any references to a User being "verified" (or similar language) only indicate that the User has completed a relevant verification or identification process and nothing else. Any such description is not an endorsement, certification or guarantee by Equipt’s about any User, including of the User identity or background or whether the User is trustworthy, safe or suitable. You should always exercise due diligence and care when deciding whether to rent a particular sporting good from the platform. </p> <p>1.4 Equipt does not and will not take any responsibility for any damage, wear, theft or loss of Sporting Goods hosted on Equipt’s platform.</p>
      <p>1.5 If you choose to use the Equipt Platform as a Owner or Renter your relationship with Equipt is limited to being an independent, third-party contractor, and not an employee, agent, joint venturer or partner of Equipt for any reason, and you act exclusively on your own behalf and for your own benefit, and not on behalf, or for the benefit, of Equipt.</p>
      <p>1.6 To promote the Equipt Platform and to increase the exposure of Listings to potential Renters, Listings and other User Content may be displayed on other websites, in applications, within emails, and in online and offline advertisements. To assist Users who speak different languages, Listings and other Users Content may be translated, in whole or in part, into other languages. Equipt cannot guarantee the accuracy or quality of such translations and Members are responsible for reviewing and verifying the accuracy of such translations.</p>
      <p>1.7 The Equipt Platform may contain links to third-party websites or resources. Such Third-Party Services may be subject to different terms and conditions and privacy practices. Equipt is not responsible or liable for the availability or accuracy of such Third-Party Services, or the content, products, or services available from such Third-Party Services. Links to such Third-Party Services are not an endorsement by Equipt of such Third-Party Services.</p>
      <p>1.8 Due to the nature of the Internet, Equipt cannot guarantee the continuous and uninterrupted availability and accessibility of the Equipt Platform.</p> <h5>2. Account Registration and Eligibility</h5> <p>2.1 You must be at least 18 years old and able to enter into legally binding contracts to access and use the Equipt Platform or register an Equipt Account. By accessing or using the Equipt Platform you represent and warrant that you are 18 or older and have the legal capacity and authority to enter into a contract.</p>
      <p>2.2 You will comply with any applicable export control laws in your local jurisdiction</p>
      <p>2.3 Equipt may make access to and use of the Equipt Platform, or certain areas or features of the Equipt Platform, such as completing a verification process, meeting specific quality or eligibility criteria, meeting Ratings or Reviews thresholds, or a Member’s booking and cancellation history.</p>
      <p>2.4 Equipt holds the exclusive right to alter or delete user content at any time, including active/inactive rentals.</p>
      <p>2.5 Equipt holds the right to delete any Users profile or denign access to any User who acts in bad faith against Equipt or any of its Users.</p>
    </ol>
  </div>
);

const Terms = ({
  isChecked = false,
  error,
  actions
}) => (
  <div style={ styles.termsContainer } onClick={ () => {
    actions.agreeToTerms();
    actions._clearError && actions._clearError('terms');
  }}>
    <CheckBox isChecked={ isChecked }/>
    <p style={ styles.terms }>I agree to the
      <span style={ styles.termsLink } onClick={ e => {
        e.preventDefault();
        actions.openModal(<TermsContent/>);
      }}>terms and conditions</span>
    </p>
  </div>
)

Terms.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  error: PropTypes.string,
  actions: PropTypes.shape({
    agreeToTerms: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    _clearError: PropTypes.func
  }),
}

const styles = {
  container: {
    padding: '20px 15px'
  },
  list: {
    padding: 0
  },
  termsContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  terms: {
    marginLeft: 10
  },
  termsLink: {
    marginLeft: 4,
    ':hover': {
      cursor: 'pointer',
      color: theme.colors.primary
    }
  }
}

export default Radium(Terms);
