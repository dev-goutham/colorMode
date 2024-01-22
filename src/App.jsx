import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Stack,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { useTheme } from "./theme.context";
import { SketchPicker } from "react-color";
import Values from "values.js";

function App() {
	const { colorMode, toggleColorMode } = useColorMode();
	const { setTheme, theme } = useTheme();

	return (
		<Container>
			<HStack justifyContent={"center"} my={10}>
				<Button colorScheme="primary">Primary</Button>;
				<Button colorScheme="secondary">Secondary</Button>;
				<Button colorScheme="success">Success</Button>;
				<Button colorScheme="error">Error</Button>;
			</HStack>
			<HStack justifyContent={"center"} my={10}>
				<Button
					onClick={toggleColorMode}
					colorScheme="primary"
					variant="outline"
				>
					Switch to {colorMode === "light" ? "dark" : "light"}
				</Button>
			</HStack>
			<Stack spacing={6}>
				<Stack>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"xl"} fontWeight={"bold"}>
							Primary
						</Text>
						<Popover>
							<PopoverTrigger>
								<Box
									h={"33px"}
									cursor={"pointer"}
									as="button"
									w={"50px"}
									rounded={"10px"}
									bg={theme.colors.primary[900]}
									border={"1px solid black"}
								></Box>
							</PopoverTrigger>
							<PopoverContent w={"fit-content"}>
								<SketchPicker
									color={theme.colors.primary[500]}
									onChangeComplete={(color) => {
										const shades = new Values(color.hex, "tint").all(10);

										setTheme({
											...theme,
											colors: {
												...theme.colors,
												primary: {
													...theme.colors.primary,
													50: "#" + shades[5].hex,
													100: "#" + shades[6].hex,
													200: "#" + shades[7].hex,
													300: "#" + shades[8].hex,
													400: "#" + shades[9].hex,
													500: "#" + shades[10].hex,
													600: "#" + shades[11].hex,
													700: "#" + shades[12].hex,
													800: "#" + shades[13].hex,
													900: "#" + shades[14].hex,
												},
											},
										});
									}}
									width="200px"
								/>
							</PopoverContent>
						</Popover>
					</Flex>
					<Flex gap={1}>
						{Object.keys(theme.colors.primary).map((key) => (
							<Box
								h={"33px"}
								cursor={"pointer"}
								as="button"
								w={"50px"}
								rounded={"10px"}
								bg={theme.colors.primary[key]}
								border={"1px solid black"}
								key={key}
							></Box>
						))}
					</Flex>
				</Stack>
				<Stack>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"xl"} fontWeight={"bold"}>
							Secondary
						</Text>
						<Popover>
							<PopoverTrigger>
								<Box
									h={"33px"}
									cursor={"pointer"}
									as="button"
									w={"50px"}
									rounded={"10px"}
									bg={theme.colors.secondary[900]}
									border={"1px solid black"}
								></Box>
							</PopoverTrigger>
							<PopoverContent w={"fit-content"}>
								<SketchPicker
									color={theme.colors.secondary[500]}
									onChangeComplete={(color) => {
										const shades = new Values(color.hex, "tint").all(10);

										setTheme({
											...theme,
											colors: {
												...theme.colors,
												secondary: {
													...theme.colors.secondary,
													50: "#" + shades[5].hex,
													100: "#" + shades[6].hex,
													200: "#" + shades[7].hex,
													300: "#" + shades[8].hex,
													400: "#" + shades[9].hex,
													500: "#" + shades[10].hex,
													600: "#" + shades[11].hex,
													700: "#" + shades[12].hex,
													800: "#" + shades[13].hex,
													900: "#" + shades[14].hex,
												},
											},
										});
									}}
									width="200px"
								/>
							</PopoverContent>
						</Popover>
					</Flex>
					<Flex gap={1}>
						{Object.keys(theme.colors.secondary).map((key) => (
							<Box
								h={"33px"}
								cursor={"pointer"}
								as="button"
								w={"50px"}
								rounded={"10px"}
								bg={theme.colors.secondary[key]}
								border={"1px solid black"}
								key={key}
							></Box>
						))}
					</Flex>
				</Stack>
				<Stack>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"xl"} fontWeight={"bold"}>
							Success
						</Text>
						<Popover>
							<PopoverTrigger>
								<Box
									h={"33px"}
									cursor={"pointer"}
									as="button"
									w={"50px"}
									rounded={"10px"}
									bg={theme.colors.success[900]}
									border={"1px solid black"}
								></Box>
							</PopoverTrigger>
							<PopoverContent w={"fit-content"}>
								<SketchPicker
									color={theme.colors.success[500]}
									onChangeComplete={(color) => {
										const shades = new Values(color.hex, "tint").all(10);

										setTheme({
											...theme,
											colors: {
												...theme.colors,
												success: {
													...theme.colors.success,
													50: "#" + shades[5].hex,
													100: "#" + shades[6].hex,
													200: "#" + shades[7].hex,
													300: "#" + shades[8].hex,
													400: "#" + shades[9].hex,
													500: "#" + shades[10].hex,
													600: "#" + shades[11].hex,
													700: "#" + shades[12].hex,
													800: "#" + shades[13].hex,
													900: "#" + shades[14].hex,
												},
											},
										});
									}}
									width="200px"
								/>
							</PopoverContent>
						</Popover>
					</Flex>
					<Flex gap={1}>
						{Object.keys(theme.colors.success).map((key) => (
							<Box
								h={"33px"}
								cursor={"pointer"}
								as="button"
								w={"50px"}
								rounded={"10px"}
								bg={theme.colors.success[key]}
								border={"1px solid black"}
								key={key}
							></Box>
						))}
					</Flex>
				</Stack>
				<Stack>
					<Flex justifyContent={"space-between"}>
						<Text fontSize={"xl"} fontWeight={"bold"}>
							Error
						</Text>
						<Popover>
							<PopoverTrigger>
								<Box
									h={"33px"}
									cursor={"pointer"}
									as="button"
									w={"50px"}
									rounded={"10px"}
									bg={theme.colors.error[900]}
									border={"1px solid black"}
								></Box>
							</PopoverTrigger>
							<PopoverContent w={"fit-content"}>
								<SketchPicker
									color={theme.colors.error[500]}
									onChangeComplete={(color) => {
										const shades = new Values(color.hex, "tint").all(10);

										setTheme({
											...theme,
											colors: {
												...theme.colors,
												error: {
													...theme.colors.error,
													50: "#" + shades[5].hex,
													100: "#" + shades[6].hex,
													200: "#" + shades[7].hex,
													300: "#" + shades[8].hex,
													400: "#" + shades[9].hex,
													500: "#" + shades[10].hex,
													600: "#" + shades[11].hex,
													700: "#" + shades[12].hex,
													800: "#" + shades[13].hex,
													900: "#" + shades[14].hex,
												},
											},
										});
									}}
									width="200px"
								/>
							</PopoverContent>
						</Popover>
					</Flex>
					<Flex gap={1}>
						{Object.keys(theme.colors.error).map((key) => (
							<Box
								h={"33px"}
								cursor={"pointer"}
								as="button"
								w={"50px"}
								rounded={"10px"}
								bg={theme.colors.error[key]}
								border={"1px solid black"}
								key={key}
							></Box>
						))}
					</Flex>
				</Stack>
			</Stack>
		</Container>
	);
}

export default App;
