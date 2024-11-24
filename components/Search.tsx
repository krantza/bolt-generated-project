import styled from "styled-components";
    import { useState } from "react";

    // ... (rest of the component code)

    const StyledInput = styled.input`
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    `;

    return (
      <StyledInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
    );

      };

      return (
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      );
    }
