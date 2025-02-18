import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import { Theme, createStyles, withStyles, WithStyles } from "@material-ui/core";
import usePrefersReducedMotion from "hooks/usePrefersReducedMotion";

const styles = (theme: Theme) =>
    createStyles({
        flippableRoot: {
            position: "relative",
            width: "400px", // Adjusted for landscape
            height: "250px", // Adjusted for landscape
        },
        back: {
            position: "absolute",
            top: "0px",
            width: "400px",
            height: "255px",
            zIndex: 20,
        },
        img: {
            borderRadius: theme.shape.borderRadius,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            boxShadow: theme.shadows[9],
        },
    })

type Props = WithStyles<typeof styles> & {
  frontImgSrc: string; // URL of the image
  backImgSrc: string;
  altText?: string; // Alt text for the image
};

const FlippableCard = (props: Props) => {
  const { classes, frontImgSrc, backImgSrc, altText = "Flippable Card Image" } = props;
  const [flipped, setFlipped] = useState(false);
  const [imgSrc, setImgSrc] = useState(frontImgSrc)

  const { transform, opacity, zIndex } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    zIndex: flipped ? 10 : 50,
    immediate: usePrefersReducedMotion(),
})

  const handleMouseOver = () => {
    setFlipped(true)
    setTimeout(() => setImgSrc(backImgSrc), 150) // Delay to change image after flip starts
  }

  const handleMouseOut = () => {
    setFlipped(false)
    setTimeout(() => setImgSrc(frontImgSrc), 150) // Delay to change image after flip starts
  }

  return (
    <div
    className={classes.flippableRoot}
    onMouseEnter={() => handleMouseOver()}
    onMouseLeave={() => handleMouseOut()}
    >
        <a.div
            style={{
                transform,
                zIndex,
            }}
        >
            <img 
                src={imgSrc} 
                alt={altText} 
                className={classes.img} 
            />
        </a.div>
        <a.div
            className={classes.back}
            style={{
                opacity,
                transform,
            }}
        >
            <img 
                src={imgSrc} 
                alt={altText} 
                className={classes.img} 
            />
        </a.div>
        
    </div>
  );
};

export default withStyles(styles)(FlippableCard);