import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Collapse,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  FaHome,
  FaBook,
  FaImages,
  FaEnvelope,
  FaInfoCircle,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import logo1 from "../../assets/logo/logo.png";
import { useTheme } from "@emotion/react";

const courses = [
  { id: 1, title: "Fullstack Python" },
  { id: 2, title: "MERN Stack" },
  { id: 3, title: "Data Science" },
  { id: 4, title: "C Language" },
  { id: 5, title: "Data Structure Using CPP" },
  { id: 6, title: "C++ Language" },
  { id: 7, title: "Machine Learning" },
  { id: 8, title: "Azure Certification | Microsoft Azure" },
  { id: 9, title: "Software Testing" },
  { id: 10, title: "Fullstack Java" },
  { id: 11, title: "Cloud & DevOPS (AWS)" },
  { id: 12, title: "Data Analytics" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isCoursesOpen, setCoursesOpen] = useState(false);
  const theme = useTheme();

  const NavItem = ({ to, icon: Icon, label, onClick }) => (
    <Link
      as={RouterLink}
      to={to}
      onClick={onClick}
      _hover={{ color: theme.colors.hover, bg: theme.colors.white }}
      p={2}
      borderRadius="md"
      color={theme.colors.text}
    >
      <Flex align="center" gap={2}>
        <Icon size={20} />
        {label}
      </Flex>
    </Link>
  );

  return (
    <Box
      bg={theme.colors.bg}
      color={theme.colors.text}
      py={4}
      px={{ base: 4, md: 8, lg: 24 }}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={1000}
      w="100%"
    >
      <Flex justify="space-between" align="center" wrap="wrap">
        <Flex align="center" gap={2} flexShrink={0}>
          <Image src={logo1} alt="Logo" h={{ base: "40px", md: "50px" }} />
        </Flex>

        <Stack
          direction="row"
          spacing={6}
          display={{ base: "none", lg: "flex" }}
          flexWrap="wrap"
          justify="flex-end"
        >
          <NavItem to="/" icon={FaHome} label="Home" />
          <NavItem to="/about" icon={FaInfoCircle} label="About Us" />

          <Menu usePortal={false}>
            <MenuButton
              as={Button}
              bg="transparent"
              color={theme.colors.text}
              _hover={{ color: theme.colors.hover }}
            >
              <Flex align="center" fontWeight={"normal"} gap={3}>
                <FaBook size={20} /> Courses
              </Flex>
            </MenuButton>
            <MenuList bg={theme.colors.white}>
              {courses.map((course) => (
                <MenuItem
                  as={RouterLink}
                  to={`/courses/${course.title}`}
                  key={course.id}
                  color={theme.colors.text}
                  zIndex={10}
                  _hover={{ bg: theme.colors.text, color: theme.colors.white }}
                >
                  {course.title}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>

          <NavItem
            to="/placement"
            icon={FaUserGraduate}
            label="Our Placement"
          />
          <NavItem to="/gallery" icon={FaImages} label="Gallery" />
          <NavItem to="/career" icon={FaBriefcase} label="Career" />
          <NavItem to="/contact" icon={FaEnvelope} label="Contact Us" />
        </Stack>

        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon boxSize={6} />}
          display={{ base: "flex", lg: "none" }}
          onClick={onOpen}
          color={theme.colors.text}
          bg="transparent"
          _hover={{ bg: theme.colors.hover, color: theme.colors.white }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={theme.colors.bg} color={theme.colors.text}>
          <Flex justify="flex-end" p={4}>
            <IconButton
              aria-label="Close menu"
              icon={<CloseIcon />}
              onClick={onClose}
              bg="transparent"
              _hover={{ bg: theme.colors.hover, color: theme.colors.white }}
            />
          </Flex>
          <DrawerBody>
            <Stack spacing={6}>
              <NavItem to="/" icon={FaHome} label="Home" onClick={onClose} />
              <NavItem
                to="/about"
                icon={FaInfoCircle}
                label="About Us"
                onClick={onClose}
              />

              <Box>
                <Button
                  bg="transparent"
                  color={theme.colors.text}
                  _hover={{ color: theme.colors.hover }}
                  onClick={() => setCoursesOpen(!isCoursesOpen)}
                  width="full"
                  textAlign="start"
                  px={2}
                  py={2}
                  display="flex"
                  alignItems="center"
                  gap={3}
                  zIndex={10}
                  justifyContent="start"
                >
                  <FaBook size={20} fontWeight={"normal"} /> Courses
                </Button>
                <Collapse in={isCoursesOpen} animateOpacity>
                  <Stack pl={6} spacing={3}>
                    {courses.map((course) => (
                      <Link
                        as={RouterLink}
                        to={`/courses/${course.title}`}
                        key={course.id}
                        onClick={onClose}
                        color={theme.colors.text}
                        _hover={{
                          bg: theme.colors.hover,
                          color: theme.colors.white,
                        }}
                        p={2}
                        borderRadius="md"
                      >
                        {course.title}
                      </Link>
                    ))}
                  </Stack>
                </Collapse>
              </Box>

              <NavItem
                to="/placement"
                icon={FaUserGraduate}
                label="Our Placement"
                onClick={onClose}
              />
              <NavItem
                to="/gallery"
                icon={FaImages}
                label="Gallery"
                onClick={onClose}
              />
              <NavItem
                to="/career"
                icon={FaBriefcase}
                label="Career"
                onClick={onClose}
              />
              <NavItem
                to="/contact"
                icon={FaEnvelope}
                label="Contact Us"
                onClick={onClose}
              />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
