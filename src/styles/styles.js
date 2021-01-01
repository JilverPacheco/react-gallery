import styled from "styled-components";
import { motion } from "framer-motion";

export const HeadContainer = styled.nav`
  position: relative;
  width: 100%;
  height: 60px;
  background: rgba(239, 182, 178, 0.4);
  color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  z-index: 1;
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
  background: #f0f2f5;
`;

export const ImagesContainer = styled.div`
  max-width: 95%;
  min-height: calc(100vh - 60px);
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ImageGridWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageWrap = styled(motion.div)`
  width: 300px;
  height: 300px;
  margin: 3px;
  transition: 0.4s;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    transform: scale(1.025);
  }
`;

export const ImageContent = styled(motion.img)`
  width: 300px;
  height: 300px;
  margin: 5px;
`;

export const Icon = styled.div`
  font-size: 18px;
  padding: 0px 5px;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 40px;
  background: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #f0f2f5;
`;

export const Form = styled.form`
  width: 80%;
  height: 90px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label`
  border: 1px solid #202020;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.025);
    background: rgba(239, 182, 178, 0.4);
    border: 1px solid #202020;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const ErrorWrapper = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const ErrorWarning = styled.div`
  display: flex;
  flex: 1;
  color: #ff4a4a;
`;

export const BarProgress = styled.progress`
  width: 600px;
`;

export const BackDrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const BackdropImage = styled(motion.img)`
  display: block;
  max-width: 75%;
  max-height: 90%;
  border: 3px solid #f0f2f5;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.4);
  
  }
`;
