import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { services } from "../src/services/services";
import { vi } from "vitest";
import Blocking from "../src/components/pages/Blocking/Blocking";
import Condicions from "../src/components/pages/Condicions/Condicions";
import Permission from "../src/components/pages/Permission/Permission";
import Login from "../src/components/pages/Login/Login";
import LoginAdmin from "../src/components/pages/LoginAdmin/LoginAdmin";


describe("rendering pages", () => {
  describe("blocking", () => {

    test("image", () => {
      vi.mock("react-router-dom", () => {
        const originalModule = vi.importActual("react-router-dom");
        return {
          ...originalModule,
          Link: ({ to }: { to: string }) => <a href={to}></a>,
        };
      });
      render(<Blocking />);
      const imageBlocking = screen.getByAltText(/blocking-image/i);

      expect(imageBlocking).toHaveAttribute('src','src/assets/images/blocking.svg');
    });


    test('text', () => { 
      render(<Blocking />);

      const text = screen.getByTestId(/text/i);
      expect(text).toBeInTheDocument()
     })

     test('button', () => { 
      render(<Blocking />);

      const linkElement = document.querySelector('[href="/login"]');
      expect(linkElement).toBeInTheDocument()
     })
  });



  describe('Condicions', () => { 

    test('title', () => { 
      render(<Condicions />)

      const titleElement = screen.getByTestId('title-condicions');
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveTextContent('Politica de privacidad');
     })


    test('title', () => { 
      render(<Condicions />)
      const textElement = screen.getByTestId('text-condicions');
      expect(textElement).toBeInTheDocument();
     })


    test('list', () => { 
      render(<Condicions />)
      const listElement = screen.getByTestId('list-condicions');
      expect(listElement).toBeInTheDocument();
     })
   })



   describe('permission', () => { 

    test('image', () => { 
      render(<Permission />);
      const imagePemission = screen.getByAltText(/permission-image/i);

      expect(imagePemission).toHaveAttribute('src','src/assets/images/blocking.svg');
     })
    })


    describe('login user', () => { 
      test('image', () => { 
        render(<Login />)
        const imageLogin = screen.getByAltText(/login-image/i);

        expect(imageLogin).toHaveAttribute('src','src/assets/images/login.svg');
       })
     })




     describe('login admin', () => {
      // Mockear el hook useNavigate
      vi.mock('react-router-dom', () => ({
        ...vi.importActual('react-router-dom'),
        useNavigate: vi.fn(),
      }));
    
      beforeEach(() => {
        // Restaurar el estado del mock antes de cada prueba
        vi.mock('react-router-dom').useNavigate.mockClear();
      });
    
      test('postAdmin navigates to /map-coverage on successful login', async () => {
        // Configurar servicios mockeados
        vi.mock('services', () => ({
          ...vi.importActual('services'),
          postLoginAdmin: vi.fn().mockResolvedValue(true),
        }));
    
        // Obtener la instancia mockeada de useNavigate
        const navigateMock = vi.mock('react-router-dom').useNavigate;
    
        // Renderizar el componente
        render(<LoginAdmin />);
    
        // Ejecutar la función postAdmin (puede que necesite ajustes según tu implementación)
        await act(async () => {
          await vi.mock('services').postLoginAdmin({
            usuario:"Bryan",
            contraseña: 12344566
          });
        });
    
        // Verificar que navigate fue llamado con la ruta esperada
        expect(navigateMock).toHaveBeenCalledWith('/map-coverage');
      });
    });
    
    

    
    

});














// describe("rendering pages", () => {
//   describe("Condicions ", () => {
//     test("title rendering", () => {
//       render(<Condicions />);
//       const title = screen.getByText(/Privacy Policy:/i);

//       expect(title).toBeInTheDocument();
//       expect(title).toHaveStyle({
//         color: "#f16e00",
//       });
//     });
//     test("text lorem ipsum rendering", () => {
//       render(<Condicions />);

//       const loremText = screen.getByText(/Lorem ipsum dolor sit amet/i);

//       expect(loremText).toBeInTheDocument();
//       expect(loremText).toHaveStyle({
//         width: "85%",
//         display: "flex",
//         justifyContent: "center",
//         margin: "4rem auto",
//       });
//     });

//     test("footer text rendering", () => {
//       render(<Condicions />);
//       const footerText = screen.getByText(/Orange Restricted/i);

//       expect(footerText).toBeInTheDocument();
//       expect(footerText).toHaveStyle({
//         color: "#f16e00",
//       });
//     });
//   });

//   describe("mapCoverage", () => {
//     vi.mock("react-router-dom", () => {
//       const originalModule = vi.importActual("react-router-dom");
//       return {
//         ...originalModule,
//         Link: ({ to }: { to: string }) => <a href={to}></a>,
//       };
//     });

//     test("buttons rendering", () => {
//       render(<MapCoverage />);
//       const button1G = screen.getByText(/1G/i);
//       const button2G = screen.getByText(/2G/i);
//       const button3G = screen.getByText(/3G/i);
//       const button4G = screen.getByText(/4G/i);
//       const button5G = screen.getByText(/5G/i);

//       expect(button1G).toBeInTheDocument();
//       expect(button1G).toHaveClass("btn", "rounded");
//       expect(button1G).toHaveStyle({
//         backgroundColor: "#527EDB",
//         width: "8rem",
//         color: "rgb(255, 255, 255)",
//       });
//       expect(button2G).toBeInTheDocument();
//       expect(button2G).toHaveClass("btn", "rounded");
//       expect(button2G).toHaveStyle({
//         backgroundColor: "#32C832",
//         width: "8rem",
//         color: "rgb(255, 255, 255)",
//       });
//       expect(button3G).toBeInTheDocument();
//       expect(button3G).toHaveClass("btn", "rounded");
//       expect(button3G).toHaveStyle({
//         backgroundColor: "#FFCC00",
//         width: "8rem",
//         color: "rgb(255, 255, 255)",
//       });
//       expect(button4G).toBeInTheDocument();
//       expect(button4G).toHaveClass("btn", "rounded");
//       expect(button4G).toHaveStyle({
//         backgroundColor: "#CD3C14",
//         width: "8rem",
//         color: "rgb(255, 255, 255)",
//       });
//       expect(button5G).toBeInTheDocument();
//       expect(button5G).toHaveClass("btn", "rounded");
//       expect(button5G).toHaveStyle({
//         backgroundColor: "#FF6600",
//         width: "8rem",
//         color: "rgb(255, 255, 255)",
//       });
//     });

//     test("headerAdmin rendering", () => {
//       render(<MapCoverage />);
//       const header = screen.getByTestId("headerAdmin");

//       expect(header).toBeInTheDocument();
//     });
//   });

//   //Register
//   describe("Register", () => {
//     test("inputs rendering", () => {
//       render(<Register />);

//       const inputName = screen.getByTestId("input_name");
//       const inputLastName = screen.getByTestId("input_last-name");
//       const inputCompany = screen.getByTestId("input_company");
//       const inputPostalCode = screen.getByTestId("input_postal-code");
//       const inputCheck = screen.getByTestId("input_check");
//       const buttonSubmit = screen.getByRole("button", { name: /Register/i });

//       expect(inputName).toBeInTheDocument();
//       expect(inputLastName).toBeInTheDocument();
//       expect(inputCompany).toBeInTheDocument();
//       expect(inputPostalCode).toBeInTheDocument();
//       expect(inputCheck).toBeInTheDocument();
//       expect(buttonSubmit).toBeInTheDocument();
//     });
//   });
// });
