import { StyledInput } from "@/shared/components/ui/StyledInput/StyledInput";
import { Container } from "../../shared/components/ui/containers/Container/Container";

const Page = async () => {
  return (
    <Container style={{ padding: 20 }}>
      <StyledInput
        InputProps={{
          placeholder: "123",
        }}
        small
      />
    </Container>
  );
};

export default Page;
