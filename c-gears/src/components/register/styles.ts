import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);

  .box-card-register {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1002px;
    height: 852px;

    background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
    position: relative;
    border-radius: 5px;
    overflow: hidden;

    @media (max-width: 1080px) {
      width: 90%;
    }

    @media (max-height: 870px) {
      height: 752px;
    }

    @media (max-height: 750px) {
      height: 602px;
    }

    @media (max-height: 640px) {
      height: 552px;
    }

    @media (max-height: 590px) {
      height: 452px;
    }

    @media (max-height: 490px) {
      height: 402px;
    }

    @media (max-height: 450px) {
      height: 352px;
    }

    @media (max-height: 360px) {
      height: 322px;
    }

    .card-register {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      align-items: center;

      width: 1000px;
      height: 850px;

      background: linear-gradient(to right, var(--Black-0), var(--Gray-8));
      position: relative;

      overflow: hidden;
      border-radius: 5px;

      @media (max-width: 1080px) {
        width: 99.7%;
      }

      @media (max-width: 574px) {
        width: 99.2%;
      }

      @media (max-width: 360px) {
        width: 99%;
      }

      @media (max-height: 870px) {
        height: 750px;
      }

      @media (max-height: 750px) {
        height: 600px;
      }

      @media (max-height: 640px) {
        height: 550px;
      }

      @media (max-height: 590px) {
        height: 450px;
      }

      @media (max-height: 490px) {
        height: 400px;
      }

      @media (max-height: 450px) {
        height: 350px;
      }

      @media (max-height: 360px) {
        height: 320px;
      }

      .header-register {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 90%;
        height: 50px;
        margin-top: 5px;

        .logo-register {
          width: 40px;
          height: 40px;
        }

        .text-register {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;

          line-height: 20px;
          color: var(--Gray-0);
        }

        .icon-close-register {
          font-size: 20px;
          color: var(--Gray-0);
        }

        .icon-close-register:hover {
          cursor: pointer;
          color: var(--Red-6);
          transition: 0.9s;
        }
      }
      .form-register {
        display: flex;
        justify-content: space-around;

        width: 90%;
        height: fit-content;

        margin-bottom: 10px;

        @media (max-width: 540px) {
          flex-direction: column;
          align-items: center;
          overflow-y: auto;
          height: 700px;
        }

        @media (max-height: 870px) {
          height: 600px;
          overflow-y: auto;
        }

        @media (max-height: 750px) {
          height: 450px;
        }

        @media (max-height: 640px) {
          height: 400px;
        }

        @media (max-height: 590px) {
          margin-top: 20px;
        }

        .data-user {
          display: flex;
          flex-direction: column;

          width: 300px;
          height: fit-content;

          gap: 10px;

          @media (max-width: 800px) {
            width: 250px;
          }

          @media (max-width: 660px) {
            width: 200px;
          }

          @media (max-width: 540px) {
            width: 90%;
          }

          input {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: 100%;
            height: 48px;

            background: var(--Gray-3);
            border: 2px solid transparent;
            border-radius: 2px;
            box-sizing: border-box;
            text-indent: 10px;
            outline: none;
            box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 1);
          }

          .form-control {
            box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 1);
          }

          .label-errors {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            width: 100%;
            height: 10px;

            p {
              font-family: "Orbitron";
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 17px;

              color: var(--Gray-4);
            }
          }
          @media (max-width: 355px) {
            ul.country-list {
              width: 250px;
            }
          }

          .search {
            display: flex;
            align-items: center;
          }

          .search-box {
            width: 80%;
            height: 30px;
          }

          .input-name:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-name:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }

          .input-surname:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .input-surname:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .input-username:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-username:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }

          .input-email:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .input-email:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .input-emailConfirm:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-emailConfirm:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }

          .form-control:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .form-control:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .selected-flag:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .selected-flag:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .input-birthday:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-birthday:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }

          .input-password:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .input-password:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .input-passwordConfirm:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-passwordConfirm:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }
        }

        .address-user {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          width: 300px;
          height: fit-content;

          gap: 10px;

          @media (max-width: 800px) {
            width: 250px;
          }

          @media (max-width: 660px) {
            width: 200px;
          }

          @media (max-width: 540px) {
            margin-top: 10px;
            width: 90%;
          }

          input {
            display: flex;
            flex-direction: row;
            align-items: center;

            width: 100%;
            height: 48px;

            background: var(--Gray-3);
            border: 2px solid transparent;
            border-radius: 2px;
            box-sizing: border-box;
            text-indent: 10px;
            outline: none;
            box-shadow: 0px 0px 15px 0px rgba(255, 255, 255, 1);
          }

          .label-errors {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            width: 100%;
            height: 10px;

            p {
              font-family: "Orbitron";
              font-style: normal;
              font-weight: 500;
              font-size: 12px;
              line-height: 17px;

              color: var(--Gray-4);
            }
          }

          .btn-register {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 100%;
            height: 48px;

            background: var(--Indigo-9);
            color: var(--Gray-0);

            box-sizing: border-box;
            border-radius: 2px;
            border: none;

            font-family: "Orbitron";
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 0px;
          }

          .input-street:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .input-street:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .input-number:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-number:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }

          .input-apt_unit:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .input-apt_unit:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .input-neighborhoods:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-neighborhoods:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }

          .input-city:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .input-city:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .input-state:hover {
            cursor: pointer;
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
            transition: 0.9s;
          }

          .input-state:focus {
            border: 2px solid var(--Red-9);
            box-shadow: 0px 0px 8px 3px rgba(201, 42, 42, 1);
          }

          .input-zipcode:hover {
            cursor: pointer;
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
            transition: 0.9s;
          }

          .input-zipcode:focus {
            border: 2px solid var(--Indigo-9);
            box-shadow: 0px 0px 8px 3px rgba(54, 79, 199, 1);
          }

          .btn-register:hover {
            cursor: pointer;
            background: var(--Red-9);
            transition: 0.9s;
          }
        }

        input::placeholder {
          font-family: "Orbitron";
          font-style: normal;
          font-weight: 400;
          font-size: 12px;
          line-height: 0px;

          color: var(--Gray-8);
        }
      }
    }
    footer {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 50px;

      gap: 15px;
      margin-bottom: 5px;

      .logo-cgo {
        width: 55px;
      }

      .logo-locust {
        width: 40px;
      }
    }
  }

  .box-card-register::before {
    content: "";
    width: 650px;
    height: 300%;

    position: absolute;
    background: linear-gradient(
      to bottom,
      var(--Red-9) 50%,
      var(--Indigo-9) 50%
    );
    border-radius: inherit;

    animation: animate 15s linear infinite;

    @media (max-width: 910px) {
      width: 550px;
    }

    @media (max-width: 660px) {
      width: 400px;
    }

    @media (max-width: 430px) {
      width: 300px;
    }

    @media (max-width: 350px) {
      width: 250px;
    }

    @media (max-height: 750px) {
      width: 400px;
    }

    @media (max-height: 600px) {
      width: 250px;
    }
  }

  @keyframes animate {
    100% {
      transform: rotate(360deg);
    }
  }
`;
