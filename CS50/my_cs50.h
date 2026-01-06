#ifndef MY_CS50_H
#define MY_CS50_H

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Альтернатива get_int()
int get_int(const char *prompt)
{
    int value;
    printf("%s", prompt);
    while (scanf("%d", &value) != 1)
    {
        while (getchar() != '\n');
        printf("Retry: %s", prompt);
    }
    while (getchar() != '\n');
    return value;
}

// Альтернатива get_float()
float get_float(const char *prompt)
{
    float value;
    printf("%s", prompt);
    while (scanf("%f", &value) != 1)
    {
        while (getchar() != '\n');
        printf("Retry: %s", prompt);
    }
    while (getchar() != '\n');
    return value;
}

// Альтернатива get_long()
long get_long(const char *prompt)
{
    long value;
    printf("%s", prompt);
    while (scanf("%ld", &value) != 1)
    {
        while (getchar() != '\n');
        printf("Retry: %s", prompt);
    }
    while (getchar() != '\n');
    return value;
}

// Альтернатива get_char()
char get_char(const char *prompt)
{
    char value;
    printf("%s", prompt);
    scanf(" %c", &value);
    while (getchar() != '\n');
    return value;
}

// Альтернатива get_string()
char* get_string(const char *prompt)
{
    char buffer[1000];
    printf("%s", prompt);
    
    if (fgets(buffer, sizeof(buffer), stdin) == NULL)
    {
        return NULL;
    }
    
    buffer[strcspn(buffer, "\n")] = '\0';
    
    char *str = malloc(strlen(buffer) + 1);
    if (str != NULL)
    {
        strcpy(str, buffer);
    }
    return str;
}

#endif