import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const defaultTheme = {
	colors: {
		primary: {
			50: "#EBF8FF",
			100: "#BEE3F8",
			200: "#90CDF4",
			300: "#63B3ED",
			400: "#4299E1",
			500: "#3182CE",
			600: "#2B6CB0",
			700: "#2C5282",
			800: "#2A4365",
			900: "#1A365D",
		},
		secondary: {
			50: "#F5F5F5",
			100: "#EEEEEE",
			200: "#E0E0E0",
			300: "#BDBDBD",
			400: "#9E9E9E",
			500: "#757575",
			600: "#616161",
			700: "#424242",
			800: "#212121",
			900: "#000000",
		},
		success: {
			50: "#F0FFF4",
			100: "#C6F6D5",
			200: "#9AE6B4",
			300: "#68D391",
			400: "#48BB78",
			500: "#38A169",
			600: "#2F855A",
			700: "#276749",
			800: "#22543D",
			900: "#1C4532",
		},
		error: {
			50: "#FFF5F5",
			100: "#FED7D7",
			200: "#FEB2B2",
			300: "#FC8181",
			400: "#F56565",
			500: "#E53E3E",
			600: "#C53030",
			700: "#9B2C2C",
			800: "#822727",
			900: "#63171B",
		},
	},
};

const ThemeContext = createContext({
	theme: defaultTheme,
	setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(defaultTheme);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<ChakraProvider theme={extendTheme({ ...theme })}>
				{children}
			</ChakraProvider>
		</ThemeContext.Provider>
	);
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useTheme = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	return { theme, setTheme };
};
