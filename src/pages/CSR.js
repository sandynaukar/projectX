import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { emailConfig, generateEmailTemplate } from '../utils/emailConfig';

const PageBackground = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at center,
      rgba(0, 255, 213, 0.15) 0%,
      rgba(0, 179, 216, 0.08) 40%,
      transparent 85%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

const PageContainer = styled.div`
  background: var(--body-bg);
  min-height: 100vh;
  padding: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: var(--accent);
  font-family: 'Montserrat', sans-serif;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-main);
  max-width: 600px;
  margin: 0 auto;
`;

const GetInvolvedButton = styled(motion.button)`
  background: var(--accent);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 2rem 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
`;

const StatBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  h2 {
    font-size: 3.2rem;
    font-weight: 800;
    font-family: 'Quicksand', sans-serif;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--accent), #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 15px rgba(0, 255, 213, 0.3);
  }

  p {
    font-size: 1.4rem;
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 213, 0.1);
    border: 1px solid rgba(0, 255, 213, 0.3);
  }
`;

const StatButton = styled(motion.button)`
  background: linear-gradient(45deg, var(--accent), #00b4d8);
  color: black;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  margin: 2rem auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 213, 0.3);
  }
`;

const MissionSection = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 4rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);

  h2 {
    font-size: 3rem;
    color: var(--accent);
    margin-bottom: 2rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    background: linear-gradient(45deg, var(--accent), #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.4rem;
    color: #e0e0e0;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
`;

const ModalContent = styled(motion.div)`
  background: rgba(30, 30, 30, 0.95);
  padding: 3rem;
  border-radius: 20px;
  width: 90%;
  max-width: 600px;
  position: relative;
  border: 1px solid rgba(0, 255, 213, 0.2);
  box-shadow: 0 0 30px rgba(0, 255, 213, 0.1);

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    text-align: center;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    background: linear-gradient(45deg, var(--accent), #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 15px rgba(0, 255, 213, 0.3);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
    color: var(--accent);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
  }

  input, select, textarea {
    width: 100%;
    padding: 1.2rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    color: white;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 10px rgba(0, 255, 213, 0.2);
    }
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.5em;
    cursor: pointer;

    option {
      background: #1a1a1a;
      color: white;
      padding: 0.5rem;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(45deg, var(--accent), #00b4d8);
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 1.3rem;
  font-weight: 700;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 213, 0.3);
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: #888;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent);
  }
`;

const ThankYouMessage = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  background: rgba(30, 30, 30, 0.95);
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  z-index: 1001;
  border: 1px solid rgba(0, 255, 213, 0.2);
  box-shadow: 0 0 30px rgba(0, 255, 213, 0.1);
  backdrop-filter: blur(8px);
  max-width: 500px;
  width: 90%;

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    background: linear-gradient(45deg, var(--accent), #00b4d8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    color: #e0e0e0;
    margin-bottom: 2rem;
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
  }
`;

const ReviewSection = styled.section`
  padding: 3rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ReviewTitle = styled(motion.h2)`
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 3rem;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  background: linear-gradient(45deg, var(--accent), #00b4d8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(0, 255, 213, 0.3);
`;

const ReviewGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ReviewCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  h3 {
    color: var(--accent);
    font-family: 'Quicksand', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 0.5px;
  }

  p {
    color: #e0e0e0;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .rating {
    color: #ffd700;
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    letter-spacing: 2px;
  }

  .date {
    color: #888;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 213, 0.1);
    border: 1px solid rgba(0, 255, 213, 0.3);
  }
`;

const AddReviewForm = styled(motion.form)`
  max-width: 800px;
  margin: 2rem auto;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    text-align: center;
  }
`;

const ReviewInput = styled.input`
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const ReviewTextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const SubmitReviewButton = styled(motion.button)`
  background: linear-gradient(45deg, var(--accent), #00b4d8);
  color: black;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 213, 0.3);
  }
`;

function CSR() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [reviews, setReviews] = useState([
    {
      name: "Priya Sharma",
      rating: 5,
      comment: "Being part of StreetDeal's CSR initiative has been incredibly fulfilling. I've helped three vendors digitize their business, and seeing their growth is heartwarming!",
      date: "2024-03-15"
    },
    {
      name: "Rahul Mehta",
      rating: 5,
      comment: "The vendor support program is amazing! I've been mentoring street vendors in financial literacy, and the transformation in their business approach is remarkable.",
      date: "2024-03-10"
    },
    {
      name: "Anita Desai",
      rating: 5,
      comment: "What an incredible platform! I've connected with local vendors and helped them improve their food safety practices. The community impact is truly visible.",
      date: "2024-03-05"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      // Send email using EmailJS
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        generateEmailTemplate(formData),
        emailConfig.publicKey
      );

      // Show success message
      setIsSubmitted(true);
      setIsModalOpen(false);
      setIsSubmitting(false);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const reviewWithDate = {
      ...newReview,
      date: new Date().toISOString().split('T')[0]
    };
    setReviews([reviewWithDate, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <PageBackground>
      <div className="content">
        <PageContainer>
          <Header>
            <Title>CSR Initiatives</Title>
            <Subtitle>
              Building sustainable communities through meaningful initiatives
            </Subtitle>
          </Header>

          <StatsContainer>
            <StatBox>
              <h2>500+</h2>
              <p>Vendors Supported</p>
            </StatBox>
            <StatBox>
              <h2>₹10L+</h2>
              <p>Financial Aid Distributed</p>
            </StatBox>
            <StatBox>
              <h2>20+</h2>
              <p>Active Programs</p>
            </StatBox>
          </StatsContainer>

          <StatButton
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </StatButton>

          <ReviewSection>
            <ReviewTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Community Impact Stories
            </ReviewTitle>

            <ReviewGrid>
              {reviews.map((review, index) => (
                <ReviewCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 255, 213, 0.1)' }}
                >
                  <h3>{review.name}</h3>
                  <div className="rating">{'★'.repeat(review.rating)}</div>
                  <p>{review.comment}</p>
                  <div className="date">{review.date}</div>
                </ReviewCard>
              ))}
            </ReviewGrid>

            <AddReviewForm
              onSubmit={handleReviewSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Share Your Experience</h3>
              <ReviewInput
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
              />
              <ReviewInput
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                required
              />
              <ReviewTextArea
                placeholder="Share your experience..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
              />
              <SubmitReviewButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Review
              </SubmitReviewButton>
            </AddReviewForm>
          </ReviewSection>

          <MissionSection>
            <h2>Join Our Mission</h2>
            <p>
              Together, we can create a more sustainable and inclusive community. Our CSR initiatives focus on
              empowering street vendors through various support programs and community development activities.
            </p>
            <GetInvolvedButton onClick={() => setIsModalOpen(true)}>
              Get Involved
            </GetInvolvedButton>
          </MissionSection>

          {isModalOpen && (
            <ModalOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ModalContent
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
                <h2>Join Our Mission</h2>
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <label>Area of Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Vendor Support">Vendor Support</option>
                      <option value="Financial Aid">Financial Aid</option>
                      <option value="Education">Education</option>
                      <option value="Community Development">Community Development</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </FormGroup>
                  <SubmitButton
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1 }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </SubmitButton>
                </form>
              </ModalContent>
            </ModalOverlay>
          )}

          {isSubmitted && (
            <ThankYouMessage
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h2>Thank You!</h2>
              <p>
                We appreciate your interest in joining our CSR initiatives. 
                We have received your information and will get back to you shortly.
              </p>
            </ThankYouMessage>
          )}
        </PageContainer>
      </div>
    </PageBackground>
  );
}

export default CSR; 