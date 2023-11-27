import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Blocking from "../src/components/pages/Blocking/Blocking";
import Condicions from "../src/components/pages/Condicions/Condicions";
import Permission from "../src/components/pages/Permission/Permission";
import Login from "../src/components/pages/Login/Login";
import LoginAdmin from "../src/components/pages/LoginAdmin/LoginAdmin";
import Register from "../src/components/pages/Register/Register";
import SendData from "../src/components/pages/SendData/SendData";
import MapCoverage from "../src/components/pages/Map/MapCoverage";
import { Services } from "../src/services/services";

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

      expect(imageBlocking).toHaveAttribute(
        "src",
        "src/assets/images/blocking.svg"
      );
    });

    test("text", () => {
      render(<Blocking />);

      const text = screen.getByTestId(/text/i);
      expect(text).toBeInTheDocument();
    });

    test("button", () => {
      render(<Blocking />);

      const linkElement = document.querySelector('[href="/login"]');
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Condicions", () => {


    test("title", () => {
      render(<Condicions />);
      const textElement = screen.getByTestId("text-condicions");
      expect(textElement).toBeInTheDocument();
    });

    test("list", () => {
      render(<Condicions />);
      const listElement = screen.getByTestId("list-condicions");
      expect(listElement).toBeInTheDocument();
    });
  });

  describe("permission", () => {
    test("image", () => {
      render(<Permission />);
      const imagePemission = screen.getByAltText(/permission-image/i);

      expect(imagePemission).toHaveAttribute(
        "src",
        "src/assets/images/blocking.svg"
      );
    });
  });

  describe("login user", () => {
    test("image", () => {
      render(<Login />);
      const imageLogin = screen.getByAltText(/login-image/i);

      expect(imageLogin).toHaveAttribute("src", "src/assets/images/login.svg");
    });
  });

  describe("loginAdmin", () => {
    vi.mock("react-router-dom", async () => {
      return {
        Link: ({ to }: { to: string }) => <a href={to}></a>,
        useNavigate: vi.fn(),
      };
    });

    test("render", () => {
      const { asFragment } = render(<LoginAdmin />);
      expect(asFragment()).toMatchSnapshot();
    });

    describe("Register", () => {
      vi.mock("react-router-dom", async () => {
        return {
          useNavigate: vi.fn(),
          useLoaderData: () => ({
            response: [
              {
                company_name: "Orange",
                company_id: 1,
              },
            ],
          }),
          Link: ({ to }: { to: string }) => <a href={to}></a>,
        };
      });

      test("register", () => {
        const { asFragment } = render(<Register />);
        expect(asFragment()).toMatchSnapshot();
      });
    });



    describe("Map", () => {
      test("map-coverage", () => {
        const { asFragment } = render(<MapCoverage />);
        expect(asFragment()).toMatchSnapshot();
      });
    });
  });

  //   describe("services", () => {
  //     let services: Services | null = null;
  //     beforeAll(() => {
  //       services = new Services()
  //     });

  //     test("getDataList", async () => {
  //       const response = await services?.getDataList();
  //       expect(response?.response[0]).toStrictEqual({
  //         created_at: "2023-11-23T11:36:28.000Z",
  //         downlink: 10,
  //         id: 1,
  //         latitude: 40.3632,
  //         longitude: -3.59222,
  //         network: "4g",
  //         rtt: 50,
  //         user_uuid: "2e35bbcc-878d-4740-843d-7583ee47096b",
  //       });
  //     });

  //     test("getCompanies", async () => {
  //       const response = await services?.getCompanies();
  //       expect(response?.response[0]).toStrictEqual({
  //         company_id: 1,
  //         company_name: "Jazztel",
  //       });
  //     });

  //     test("postDataList", async () => {
  //       const response = await services?.postDataList({
  //         created_at: "2023-11-23T11:36:28.000Z",
  //         downlink: 10,
  //         latitude: 40.3632,
  //         longitude: -3.59222,
  //         network: "4g",
  //         rtt: 50,
  //         user_uuid: "2e35bbcc-878d-4740-843d-7583ee47096b",
  //       });
  //       expect(response).toBe(response);
  //     });

  //     test("postLoginAdmin", async () => {
  //       const response = await services?.postLoginAdmin({
  //         admin_username: "Bryan",
  //         admin_password: "1234567",
  //       });
  //       expect(response).toBe(true);
  //     });

  //     test("postRegisterUser", async () => {
  //       const response = await services?.postRegisterUser({
  //         user_name: "usuario",
  //         user_lastname: "last",
  //         company_id: "Orange",
  //         postal_code: 28028,
  //         user_check: true,
  //       });
  //       expect(response).toBe(response);
  //     });
  //   });
  // });
});













vi.mock("../src/services/services.ts", () => {
  return {
    Services: class MockServices {
      constructor() {}

      async getDataList(someCondition: boolean) {
        if (someCondition) {
          throw new Error("error");
        } else {
          return {
            response: [
              {
                created_at: "2023-11-23T11:36:28.000Z",
                downlink: 10,
                id: 1,
                latitude: 40.3632,
                longitude: -3.59222,
                network: "4g",
                rtt: 50,
                user_uuid: "2e35bbcc-878d-4740-843d-7583ee47096b",
              },
            ],
          };
        }
      }
      async getCompanies(someCondition: boolean) {
        if (someCondition) {
          throw new Error("error");
        } else {
          return {
            response: [
              {
                company_id: 1,
                company_name: "Jazztel",
              },
            ],
          };
        }
      }
      async postDataList(someCondition: boolean) {
        if (someCondition) {
          throw new Error("error");
        } else {
          return {
            response: [
              {
              created_at: "2023-11-23T11:36:28.000Z",
              downlink: 10,
              latitude: 40.3632,
              longitude: -3.59222,
              network: "4g",
              rtt: 50,
              user_uuid: "2e35bbcc-878d-4740-843d-7583ee47096b",
              },
            ],
          };
        }
      }
      async postLoginAdmin(someCondition: boolean) {
        if (someCondition) {
          throw new Error("error");
        } else {
          return {
            response: [
              {
                admin_name: "Usuario",
                admin_password: "1234567",
              },
            ],
          };
        }
      }
      async postRegisterUser(someCondition: boolean) {
        if (someCondition) {
          throw new Error("error");
        } else {
          return {
            response: [
              {
          user_name: "usuario",
          user_lastname: "last",
          company_id: "Orange",
          postal_code: 28028,
          user_check: true,
              },
            ],
          };
        }
      }
    },
  };
});






describe("getDataList", () => {
  const nuevo = new Services();

  test("success", async () => {
    const success = await nuevo.getDataList(false);
    expect(success?.response.length).toBe(1);
  });

  test("error", async () => {
    try {
      const errores = await nuevo.getDataList(true);
      expect(errores).toBeFalsy();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe("error");
      }
    }
  });
});

describe("getCompanies", () => {
  const services = new Services();

  test("success", async () => {
    const success = await services.getCompanies(false);
    expect(success?.response.length).toBe(1);
  });

  test("error", async () => {
    try {
      const errores = await services.getCompanies(true);
      expect(errores).toBeFalsy();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe("error");
      }
    }
  });
});





// describe("postDataList", () => {
//   const services = new Services();

//   test("success", async () => {
//     const success = await services.postDataList(false);
//     expect(success).toMatchObject({
//       created_at: "2023-11-23T11:36:28.000Z",
//       downlink: 10,
//       latitude: 40.3632,
//       longitude: -3.59222,
//       network: "4g",
//       rtt: 50,
//       user_uuid: "2e35bbcc-878d-4740-843d-7583ee47096b",
//     });
//   });

//   test("error", async () => {
//     try {

//       const errores = await services.postDataList(true);
//       expect(errores).toBeFalsy();
//     } catch (error) {
//       if (error instanceof Error) {
//         expect(error.message).toBe("error");
//       }
//     }
//   });
// });
