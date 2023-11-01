import { Skeleton } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

export const Skeletons = () => {
  return (
    <Container maxWidth={false}>
      <Box display="flex" gap="2em">
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
      </Box>

      <Box display="flex" gap="2em">
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        </Box>

        <Box display="flex" gap="2em">
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        <Skeleton variant="rounded" width="25%" height={300} sx={{ marginBottom: "1em" }} />
        </Box>

    </Container>

    
  );
};