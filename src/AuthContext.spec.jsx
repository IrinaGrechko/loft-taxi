import React from "react";
import {AuthContext, AuthProvider} from "./AuthContext";
import {render} from "@testing-library/react";
import {act} from "react-dom/test-utils";

describe("AuthContext", () => {
  describe("#logIn", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {
              (value) => {
                isLoggedIn = value.isLoggedIn;
                logIn = value.logIn;
                return null;
              }
            }
          </AuthContext.Consumer>
        </AuthProvider>
      )

      expect(isLoggedIn).toBe(false)
      act(() => {
        logIn("valid@email.com", "correctpassword");
      })
      expect(isLoggedIn).toBe(true)

    })
  })
  describe("#logOut", () => {
    it("sets 'isLoggedIn' to true", () => {
      let isLoggedIn;
      let logOut;
      let logIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {
              (value) => {
                isLoggedIn = value.isLoggedIn;
                logOut = value.logOut;
                logIn = value.logIn;
                return null;
              }
            }
          </AuthContext.Consumer>
        </AuthProvider>
      )
      act(() => {
        logIn("valid@email.com", "correctpassword");
      })
      expect(isLoggedIn).toBe(true)
      act(() => {
        logOut();
      })
      expect(isLoggedIn).toBe(false)
    })
  })
})
