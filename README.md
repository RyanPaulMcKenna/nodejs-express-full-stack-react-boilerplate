#   n o d e . j s - e x p r e s s - f u l l - s t a c k - r e a c t - b o i l e r p l a t e  
  
 #   F r o n t e n d   I n s t r u c t i o n s  
  
  
  
 #   B a c k e n d   I n s t r u c t i o n s  
  
 B o i l e r p l a t e   I   u s e   f o r   N o d e . j s   a p p s .   C o m p i l e d   a n d   a d a p t e d   f r o m   t h e   f o l l o w i n g   s o u r c e s :  
 -   h t t p s : / / g i t h u b . c o m / l e o n p a h o l e / n o d e j s - e x p r e s s - b o i l e r p l a t e  
 -   h t t p s : / / g i t h u b . c o m / B r e t F i s h e r / n o d e - d o c k e r - g o o d - d e f a u l t s  
 -   h t t p s : / / g i t h u b . c o m / s a n t i q / b u l l e t p r o o f - n o d e j s  
 -   h t t p s : / / g i t h u b . c o m / R o b i n B u s c h m a n n / s e q u e l i z e - t y p e s c r i p t - e x a m p l e  
 -   h t t p s : / / w w w . d o c k e r . c o m / b l o g / h o w - t o - d e p l o y - o n - r e m o t e - d o c k e r - h o s t s - w i t h - d o c k e r - c o m p o s e /  
  
 # #   S t a r t   d e v e l o p i n g  
  
 R u n   b u i l d :  
  
 ` m a k e   b u i l d `  
  
 R u n   c o n t a i n e r s :  
  
 ` m a k e   u p `  
  
 M i g r a t e :  
  
 ` m a k e   m i g a t e `  
  
 S e e d :  
  
 ` m a k e   s e e d `  
  
 C h e c k   s t a t u s :  
  
 ` m a k e   p s `  
  
 C h e c k   l o g s :  
  
 ` m a k e   l o g s `  
  
 E x e c   i n t o   a p i :  
  
 ` m a k e   e x e c `  
  
 # #   A d d   m i g r a t i o n  
  
 ` ` `  
 d o c k e r - c o m p o s e   e x e c   a p i   n p x   s e q u e l i z e - c l i   m i g r a t i o n : c r e a t e   - - n a m e   a d d _ p a s s w o r d _ t o _ u s e r s  
 ` ` `  
  
 #   B u i l d   p r o d u c t i o n   i m a g e  
  
 C r e a t e   ` b u i l d _ a n d _ r e l e a s e . e n v `   ( f r o m   e x a m p l e   f i l e )   a n d   f i l l   i n   y o u r   i m a g e   n a m e   a n d   u s e r n a m e   f o r   D o c k e r   h u b .   T h e n   r u n   ` b u i l d _ a n d _ r e l e a s e . s h ` .   T h e   s c r i p t   w i l l   b u i l d   i m a g e ,   t h e n   p r o m p t   f o r   d e p l o y m e n t   p a r a m e t e r s   a n d   d e p l o y   t h e   p r o j e c t   a n d   i n c r e m e n t   v e r s i o n .  
  
 #   D e p l o y   t o   p r o d u c t i o n  
  
 N o t e :   y o u   n e e d   a t   l e a s t   d o c k e r - c o m p o s e   v e r s i o n   1 . 2 6   f o r   b e l o w   c o d e   t o   w o r k .   I f   i t   d o e s n ' t   w o r k ,   y o u   c a n   j u s t   m a n u a l l y   d e p l o y   t o   a   s e r v e r .  
  
 N o t e :   y o u   s h o u l d   c h a n g e   ` M a x S e s s i o n s `   p a r a m e t e r   o n   y o u r   s e r v e r   f r o m   1 0   t o   5 0 0   ( i n   ` / e t c / s s h / s s h d _ c o n f i g ` ) .  
  
 U s e   ` p r o d _ d e p l o y `   t o   d e p l o y   y o u r   L O C A L   ` d o c k e r - c o m p o s e . p r o d . y m l `   w i t h   y o u r   l o c a l   ` e n v . p r o d `   s e t t i n g s .   Y o u   c a n   u s e   a l l   o f   t h e   d e v e l o p m e n t   m a k e   c o m m a n d s   ( e x c e p t   ` e x e c `   a n d   ` b u i l d ` )   w i t h   p r e f i x   ` p r o d _ ` .  
  
 R u n   c o n t a i n e r s :  
  
 ` m a k e   p r o d _ u p `  
  
 M i g r a t e :  
  
 ` m a k e   p r o d _ m i g a t e `  
  
 S e e d :  
  
 ` m a k e   p r o d _ s e e d `  
  
 C h e c k   s t a t u s :  
  
 ` m a k e   p r o d _ p s `  
  
 C h e c k   l o g s :  
  
 ` m a k e   p r o d _ l o g s `  
  
 # # #   L I C E N S E  
  
 M I T   L i c e n s e ,  
  
 C o p y r i g h t   ( c )   2 0 2 1   R y a n   M c K e n n a  
  
 P e r m i s s i o n   i s   h e r e b y   g r a n t e d ,   f r e e   o f   c h a r g e ,   t o   a n y   p e r s o n   o b t a i n i n g   a   c o p y   o f   t h i s   s o f t w a r e   a n d   a s s o c i a t e d   d o c u m e n t a t i o n   f i l e s   ( t h e   " S o f t w a r e " ) ,   t o   d e a l   i n   t h e   S o f t w a r e   w i t h o u t   r e s t r i c t i o n ,   i n c l u d i n g   w i t h o u t   l i m i t a t i o n   t h e   r i g h t s   t o   u s e ,   c o p y ,   m o d i f y ,   m e r g e ,   p u b l i s h ,   d i s t r i b u t e ,   s u b l i c e n s e ,   a n d / o r   s e l l   c o p i e s   o f   t h e   S o f t w a r e ,   a n d   t o   p e r m i t   p e r s o n s   t o   w h o m   t h e   S o f t w a r e   i s   f u r n i s h e d   t o   d o   s o ,   s u b j e c t   t o   t h e   f o l l o w i n g   c o n d i t i o n s :  
  
 T h e   a b o v e   c o p y r i g h t   n o t i c e   a n d   t h i s   p e r m i s s i o n   n o t i c e   s h a l l   b e   i n c l u d e d   i n   a l l   c o p i e s   o r   s u b s t a n t i a l   p o r t i o n s   o f   t h e   S o f t w a r e .  
  
 T H E   S O F T W A R E   I S   P R O V I D E D   " A S   I S " ,   W I T H O U T   W A R R A N T Y   O F   A N Y   K I N D ,   E X P R E S S   O R   I M P L I E D ,   I N C L U D I N G   B U T   N O T   L I M I T E D   T O   T H E   W A R R A N T I E S   O F   M E R C H A N T A B I L I T Y ,   F I T N E S S   F O R   A   P A R T I C U L A R   P U R P O S E   A N D   N O N I N F R I N G E M E N T .   I N   N O   E V E N T   S H A L L   T H E   A U T H O R S   O R   C O P Y R I G H T   H O L D E R S   B E   L I A B L E   F O R   A N Y   C L A I M ,   D A M A G E S   O R   O T H E R   L I A B I L I T Y ,   W H E T H E R   I N   A N   A C T I O N   O F   C O N T R A C T ,   T O R T   O R   O T H E R W I S E ,   A R I S I N G   F R O M ,   O U T   O F   O R   I N   C O N N E C T I O N   W I T H   T H E   S O F T W A R E   O R   T H E   U S E   O R   O T H E R   D E A L I N G S   I N   T H E   S O F T W A R E .  
 