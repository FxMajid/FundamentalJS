DoRectanglesOverlap(Vector2D(3, 7),
                    Vector2D(8, 5),
                    Vector2D(6, 4),
                    Vector2D(9, 4));

if ((Pos1.x < Pos2.x + Size2.x) &&
    (Pos1.y < Pos2.y + Size2.y) &&
    (Pos2.x < Pos1.x + Size1.x) &&
    (Pos2.y < Pos1.y + Size1.y));

