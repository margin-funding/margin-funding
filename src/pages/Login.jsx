"use client";

import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "../redux/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:800';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("email");
    const password = formData.get("Password");

    try {
      console.log('Making request to:', API_URL);
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      if (response.data.success) {
        toast.success("Login successful");
        const res = await axios.get(
          `${API_URL}/userdata?username=${username}`
        );
        dispatch(setUser(res?.data));
        navigate("/dashboard");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log('API Error:', error);
      toast.error("Something went wrong with the login. Please try again.");
    }
  };

  return (
    <div className="user-page-section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'stretch',
      background: '#fff',
      '@media (max-width: 768px)': {
        minHeight: 'auto'
      }
    }}>
      <div className="w-layout-grid grid-user-page" style={{
        width: '100%',
        margin: '0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr',
          minHeight: '100vh'
        }
      }}>
        <div className="user-page-content-wrap" style={{
          background: 'linear-gradient(145deg, #00C853 0%, #009540 100%)',
          padding: '2rem',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          '@media (max-width: 768px)': {
            padding: '2rem 1rem',
            minHeight: '50vh'
          }
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.08\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
            backgroundSize: '24px',
            opacity: '0.6',
            zIndex: '0'
          }}></div>
          <div style={{
            width: '100%',
            maxWidth: '500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: '1',
            padding: '3rem 2rem',
            '@media (max-width: 768px)': {
              padding: '2rem 1rem'
            }
          }}>
            <h6 style={{ 
              color: '#ffffff',
              fontSize: '1.4rem',
              marginBottom: '1.5rem',
              fontWeight: '500',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              '@media (max-width: 768px)': {
                fontSize: '1.2rem',
                marginBottom: '1rem'
              }
            }}>Welcome Back to</h6>
            <div style={{
              marginBottom: '2.5rem',
              '@media (max-width: 768px)': {
                marginBottom: '2rem'
              }
            }}>
              <h1 style={{ 
                color: '#ffffff',
                fontSize: '4rem',
                fontWeight: '800',
                lineHeight: '1.1',
                marginBottom: '0.2rem',
                textShadow: '0 2px 10px rgba(0,0,0,0.15)',
                '@media (max-width: 768px)': {
                  fontSize: '3rem'
                }
              }}>Margin</h1>
              <h1 style={{ 
                color: '#ffffff',
                fontSize: '4rem',
                fontWeight: '800',
                lineHeight: '1.1',
                textShadow: '0 2px 10px rgba(0,0,0,0.15)',
                '@media (max-width: 768px)': {
                  fontSize: '3rem'
                }
              }}>Funding</h1>
            </div>
            <p style={{ 
              color: '#ffffff',
              fontSize: '1.2rem',
              lineHeight: '1.7',
              maxWidth: '400px',
              textShadow: '0 1px 3px rgba(0,0,0,0.1)',
              '@media (max-width: 768px)': {
                fontSize: '1.1rem',
                maxWidth: '300px'
              }
            }}>
              <strong>
                Grow your trading beyond boundaries.
              </strong>
              <br />
              Trade with us and receive up to 90% of profit.
            </p>
          </div>
        </div>

        <div className="user-page-form-wrap" style={{ 
          background: 'linear-gradient(145deg, #f8f9ff 0%, #ffffff 100%)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '@media (max-width: 768px)': {
            padding: '2rem 1rem',
            minHeight: '50vh'
          }
        }}>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'radial-gradient(circle at 0% 0%, rgba(0,200,83,0.03) 0%, transparent 50%), radial-gradient(circle at 100% 100%, rgba(0,200,83,0.03) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            width: '100%',
            maxWidth: '400px',
            position: 'relative',
            zIndex: '1',
            '@media (max-width: 768px)': {
              maxWidth: '100%'
            }
          }}>
            <div className="user-page-title-wrap" style={{ 
              marginBottom: '2rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '@media (max-width: 768px)': {
                marginBottom: '1.5rem'
              }
            }}>
            <img 
              src="/public/MF_logo.png" 
              alt="MF Logo" 
              style={{
                height: '120px',
                width: 'auto',
                display: 'block',
                margin: '0 auto'
              }}
            />
            </div>
            <div className="user-page-form w-form">
              <form id="loginForm" name="loginForm" onSubmit={handleSubmit}>
                <div className="input-group" style={{ marginBottom: '1rem' }}>
                  <input
                    className="form-input w-input"
                    maxLength="256"
                    name="email"
                    data-name="email"
                    placeholder="Email"
                    type="email"
                    id="username"
                    required
                    style={{ 
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: '1px solid #e0e0e0',
                      fontSize: '1rem',
                      backgroundColor: '#f5f5f5',
                      color: '#333333',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                      '&:focus': {
                        borderColor: '#00C853',
                        boxShadow: '0 0 0 3px rgba(0,200,83,0.1)',
                        outline: 'none'
                      },
                      '@media (max-width: 768px)': {
                        padding: '14px',
                        fontSize: '0.95rem'
                      }
                    }}
                  />
                </div>
                <div className="input-group" style={{ marginBottom: '1.5rem' }}>
                  <input
                    className="form-input w-input"
                    maxLength="256"
                    name="Password"
                    data-name="Password"
                    placeholder="Password"
                    type="password"
                    id="Password"
                    required
                    style={{ 
                      width: '100%',
                      padding: '16px',
                      borderRadius: '12px',
                      border: '1px solid #e0e0e0',
                      fontSize: '1rem',
                      backgroundColor: '#f5f5f5',
                      color: '#333333',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                      '&:focus': {
                        borderColor: '#00C853',
                        boxShadow: '0 0 0 3px rgba(0,200,83,0.1)',
                        outline: 'none'
                      },
                      '@media (max-width: 768px)': {
                        padding: '14px',
                        fontSize: '0.95rem'
                      }
                    }}
                  />
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="button-primary-1 w-button"
                  value="Log In"
                  style={{ 
                    width: '100%',
                    padding: '16px',
                    backgroundColor: '#00C853',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 12px rgba(0,200,83,0.2)',
                    '&:hover': {
                      transform: 'translateY(-1px)',
                      boxShadow: '0 6px 16px rgba(0,200,83,0.3)'
                    },
                    '@media (max-width: 768px)': {
                      padding: '14px',
                      fontSize: '0.95rem'
                    }
                  }}
                />
              </form>
              <div
                id="error"
                className="error-message w-form-fail"
                role="region"
                aria-label="User Page Form failure"
                style={{ 
                  display: "none", 
                  marginTop: '1rem', 
                  textAlign: 'center', 
                  color: '#ff4444',
                  '@media (max-width: 768px)': {
                    fontSize: '0.9rem'
                  }
                }}
              >
                <div>User does not exist or login failed.</div>
              </div>
              <div
                id="server-error"
                className="error-message w-form-fail"
                role="region"
                aria-label="User Page Form failure"
                style={{ 
                  display: "none", 
                  marginTop: '1rem', 
                  textAlign: 'center', 
                  color: '#ff4444',
                  '@media (max-width: 768px)': {
                    fontSize: '0.9rem'
                  }
                }}
              >
                <div>
                  Oops! There was a problem with the server. Please try again
                  later.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;