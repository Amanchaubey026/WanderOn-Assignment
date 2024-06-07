import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Grid,
  Image,
  Input,
  Select,
  Text,
  Flex,
  Heading,
  HStack,
} from "@chakra-ui/react";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [sortKey, setSortKey] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("card");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = data.filter(
    (item) =>
      (category === "all" || item.category === category) &&
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    }
  });

  return (
    <Box p={4} maxWidth="1200px" mx="auto">
      <Flex justify="space-between" mb={4} wrap="wrap">
        <HStack spacing={2} mb={[4, 0]}>
          <Text>Sort by:</Text>
          <Select
            w={''}
            borderColor="gray.300"
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="price">Price</option>
            <option value="title">Name</option>
          </Select>
          <Button
            ml={2}
            borderColor="gray.300"
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            {sortOrder === "asc" ? "Ascending" : "Descending"}
          </Button>
        </HStack>
        <HStack spacing={2} mb={[4, 0]}>
          <Text>Filter by category:</Text>
          <Select
            borderColor="gray.300"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
          </Select>
        </HStack>
        <HStack spacing={2} mb={[4, 0]}>
          <Text>Search:</Text>
          <Input
            borderColor="gray.300"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </HStack>
        <Button
          ml={2}
          borderColor="gray.300"
          onClick={() => setView(view === "card" ? "list" : "card")}
        >
          {view === "card" ? "List View" : "Card View"}
        </Button>
      </Flex>
      <Grid
        templateColumns={
          view === "card" ? ["1fr", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"] : "1fr"
        }
        gap={4}
      >
        {sortedData.map((item) => (
          <Box
            key={item.id}
            border="1px"
            borderColor="gray.300"
            borderRadius="md"
            p={4}
            textAlign="center"
            boxShadow="lg"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.05)" }}
          >
            <Image
              src={item.image}
              alt={item.title}
              w="100%"
              h="200px"
              objectFit="contain"
              mb={4}
            />
            <Heading as="h2" size="md" mb={2}>
              {item.title}
            </Heading>
            <Text mb={4} noOfLines={2}>
              {item.description}
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              ${item.price}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default DataFetcher;
