import React from "react";
import { Card, CardContent, CardMedia, typograpgy, Button, Box, Typography, textFieldClasses} from '@mui/material';


const User = ({ user }) => {
    return (
        <Box sx={{display:'flex', justifyContent: 'center', marginTop: 2}}>
            {user ? (
                <Card sx={{maxWidth: 345}}>
                    <CardMedia
                    component='img'
                    alt={user.login}
                    height="140"
                    image={user.avatar_url}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {user.login}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {user.bio}
                        </Typography>
                    </CardContent>
                    <Button
                    size="small"
                    color="primary"
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        View Profile
                    </Button>
                    </Card>
            ) : (
                <Typography variant="body1" color="text.secondary">
                    No user Found
                </Typography>
            )}
            </Box>
            );
        };

        export default User;
        